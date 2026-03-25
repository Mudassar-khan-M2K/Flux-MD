module.exports = {
  name: 'ytmp4',
  command: ['ytmp4'],
  async execute({ sock, msg, args }) {
    if (!args[0]) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide link' });

    await sock.sendMessage(msg.key.remoteJid, { text: 'Processing...' });

    try {
      await sock.sendMessage(msg.key.remoteJid, {
        video: { url: args[0] },
        caption: 'Done'
      });
    } catch (e) {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Failed' });
    }
  }
};
