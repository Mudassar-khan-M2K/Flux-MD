module.exports = {
  name: 'ytmp3',
  command: ['ytmp3'],
  async execute({ sock, msg, args }) {
    if (!args[0]) return sock.sendMessage(msg.key.remoteJid, { text: 'Provide link' });

    await sock.sendMessage(msg.key.remoteJid, { text: 'Processing...' });

    try {
      await sock.sendMessage(msg.key.remoteJid, {
        audio: { url: args[0] },
        mimetype: 'audio/mpeg'
      });
    } catch (e) {
      await sock.sendMessage(msg.key.remoteJid, { text: 'Failed' });
    }
  }
};
