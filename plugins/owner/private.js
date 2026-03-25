module.exports = {
  name: 'private',
  command: ['private'],
  async execute({ sock, msg, args, OWNERS, sender }) {
    if (!OWNERS.includes(sender)) return sock.sendMessage(msg.key.remoteJid, { text: 'Not authorized' });
    await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command executed: private' });
  }
};
