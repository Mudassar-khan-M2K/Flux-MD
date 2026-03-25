module.exports = {
  name: 'ping',
  command: ['ping'],
  async execute({ sock, msg, args }) {
    await sock.sendMessage(msg.key.remoteJid, { text: 'Utility command executed: ping' });
  }
};
