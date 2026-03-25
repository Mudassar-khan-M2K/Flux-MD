require('dotenv').config();
const fs = require('fs');
const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');

const PREFIX = process.env.PREFIX || '!';
const OWNERS = process.env.OWNER_NUMBERS.split(',');

// Load plugins recursively
function loadPlugins(dir) {
    let plugins = [];
    fs.readdirSync(dir).forEach(file => {
        const fullPath = dir + '/' + file;
        if (fs.lstatSync(fullPath).isDirectory()) {
            plugins = plugins.concat(loadPlugins(fullPath));
        } else {
            plugins.push(require(fullPath));
        }
    });
    return plugins;
}

const plugins = loadPlugins('./plugins');

async function start() {
    const { state } = await useMultiFileAuthState('./session');
    const sock = makeWASocket({ auth: state });

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
                console.log(e);
            }
        }
    });
}

start();
