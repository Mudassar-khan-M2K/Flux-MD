module.exports = {
  name: 'add',
  command: ['add'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Group command executed: add' });
  }
};
