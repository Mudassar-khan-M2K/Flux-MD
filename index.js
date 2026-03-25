require('dotenv').config();
const fs = require('fs');
const express = require('express');
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const PREFIX = process.env.PREFIX || '!';
const OWNERS = process.env.OWNER_NUMBERS?.split(',') || [];

// ---------------------------
// Express server to keep Heroku alive
// ---------------------------
const app = express();
app.get('/', (req, res) => res.send('Bot is running ✅'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// ---------------------------
// Load plugins recursively
// ---------------------------
function loadPlugins(dir) {
    let plugins = [];
    fs.readdirSync(dir).forEach(file => {
        const fullPath = dir + '/' + file;
        if (fs.lstatSync(fullPath).isDirectory()) {
            plugins = plugins.concat(loadPlugins(fullPath));
        } else if (file.endsWith('.js')) {
            const plugin = require(fullPath);
            if (plugin.command) plugins.push(plugin);
        }
    });
    return plugins;
}

const plugins = loadPlugins('./plugins');

// ---------------------------
// Start WhatsApp bot
// ---------------------------
async function start() {
    const { state, saveCreds } = await useMultiFileAuthState('./session');

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true, // helpful for first login
    });

    // Save credentials automatically
    sock.ev.on('creds.update', saveCreds);

    // Connection update handling
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        console.log('Connection update:', connection);

        if (connection === 'close') {
            const errCode = lastDisconnect?.error?.output?.statusCode;
            console.log('Disconnected with code:', errCode);

            if (errCode !== 401) {
                console.log('🔄 Reconnecting...');
                start();
            } else {
                console.log('❌ Session invalid. Delete session folder to re-login.');
            }
        } else if (connection === 'open') {
            console.log('✅ Bot connected to WhatsApp');
        }
    });

    // Message listener
    sock.ev.on('messages.upsert', async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;

        const body = msg.message.conversation || msg.message.extendedTextMessage?.text;
        if (!body) return;

        const from = msg.key.remoteJid;
        const sender = msg.key.participant || msg.key.remoteJid;

        if (!body.startsWith(PREFIX)) return;

        const args = body.slice(PREFIX.length).trim().split(/ +/);
        const cmd = args.shift().toLowerCase();

        const plugin = plugins.find(p => p.command.includes(cmd));

        if (plugin) {
            try {
                await plugin.execute({ sock, msg, args, from, sender, PREFIX, OWNERS, plugins });
            } catch (e) {
                console.error('Plugin error:', e);
            }
        }
    });
}

// Start the bot
start().catch(console.error);
