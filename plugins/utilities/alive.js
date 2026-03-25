module.exports = {
  name: 'alive',
  command: ['alive'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Utility command executed: alive' });
  }
};
