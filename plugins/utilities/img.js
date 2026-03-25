module.exports = {
  name: 'img',
  command: ['img'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Utility command executed: img' });
  }
};
