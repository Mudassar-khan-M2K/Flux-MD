module.exports = {
  name: 'upload',
  command: ['upload'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Utility command executed: upload' });
  }
};
