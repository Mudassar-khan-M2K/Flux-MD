module.exports = {
  name: 'promote',
  command: ['promote'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Group command executed: promote' });
  }
};
