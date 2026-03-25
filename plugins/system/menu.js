module.exports = {
  name: 'menu',
  command: ['menu'],
  async execute({ sock, msg, PREFIX, plugins }) {
    const text = `WELCOME 👋

━━━〔 FLUX MD 〕━━━⬣
┃ Version: 1.0
┃ Prefix: ${PREFIX}
┃ Status: Online
┃ Plugins: ${plugins.length}
╰━━━━━━━━━━━━━━⬣

📥 Download Menu
🧰 Utilities
👑 Owner
⚙️ Settings
📊 Group
ℹ️ About
👨‍💻 Developer

> BY FLUX MD`;

    await sock.sendMessage(msg.key.remoteJid, {
      image: { url: 'https://files.catbox.moe/t5hs3i.jpg' },
      caption: text
    });
  }
};
