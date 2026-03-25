module.exports = {
  name: 'kick',
  command: ['kick'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Group command executed: kick' });
  }
};
