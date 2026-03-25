module.exports = {
  name: 'public',
  command: ['public'],
  async execute({ sock, msg, args, OWNERS, sender }) {
    if (!OWNERS.includes(sender)) return sock.sendMessage(msg.key.remoteJid, { text: 'Not authorized' });
    await sock.sendMessage(msg.key.remoteJid, { text: 'Owner command executed: public' });
  }
};
