module.exports = {
  name: 'demote',
  command: ['demote'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Group command executed: demote' });
  }
};
