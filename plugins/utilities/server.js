module.exports = {
  name: 'server',
  command: ['server'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Utility command executed: server' });
  }
};
