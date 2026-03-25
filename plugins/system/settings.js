module.exports = {
  name: 'settings',
  command: ['settings'],
  async execute({ sock, msg }) {
    const text = `⚙️ SETTINGS MENU

1️⃣ Auto Typing: On/Off
2️⃣ Auto Recording: On/Off
3️⃣ Auto React: On/Off
4️⃣ Anti-ViewOnce: On/Off
5️⃣ Custom Emoji React
6️⃣ Offline Reply Message`;
    await sock.sendMessage(msg.key.remoteJid, { text });
  }
};
