⚡ FLUX MD — Ultimate WhatsApp Multi-Downloader
<p align="center"> <img src="https://files.catbox.moe/t5hs3i.jpg" width="320"/> </p> <p align="center"> <b>⚡ Fast • Modular • Scalable • Heroku Ready ⚡</b> </p> <p align="center"> <img src="https://img.shields.io/github/stars/Mudassar-khan-M2K/flux-md?style=for-the-badge"> <img src="https://img.shields.io/github/forks/Mudassar-khan-M2K/flux-md?style=for-the-badge"> <img src="https://img.shields.io/github/license/Mudassar-khan-M2K/flux-md?style=for-the-badge"> <img src="https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge"> </p>
🚀 Overview

FLUX MD is a high-performance WhatsApp bot built using
Baileys, designed for:

📥 Media downloading (YouTube, Instagram, TikTok, Pinterest)
⚙️ Modular plugin system
🔥 Easy expansion (drop-in commands)
🚀 One-click deployment (Heroku, Render, Railway)
👨‍💻 Developer
Field	Info
Name	Mudassar
GitHub	https://github.com/Mudassar-khan-M2K

Email	mudassar.khan.og@gmail.com
📦 Version
FLUX MD v1.0
🎬 Features
📥 Download Engine
!ytmp4 → YouTube Video
!ytmp3 → YouTube Audio
!igmp4 → Instagram Video
!igmp3 → Instagram Audio
!ttmp4 → TikTok Video
!pinmp4 → Pinterest Media
⚙️ Core System
🧩 Plugin-based architecture
⚡ Fast command parsing
🔐 ENV-based config
👥 Multi-user support
🎨 UI / UX
Image-based menu
Structured categories
Clean command system
🧩 Plugin Architecture
plugins/
 ├── download/
 │   ├── ytmp4.js
 │   ├── ytmp3.js
 │   ├── igmp4.js
 │   ├── igmp3.js
 │   ├── ttmp4.js
 │   └── pinmp4.js
 └── system/
     └── menu.js
➕ Add New Command (1-Minute Setup)
📁 Step 1

Create file:

plugins/mycmd.js
🧠 Step 2
module.exports = {
  name: "hello",
  command: ["hello"],

  async execute({ sock, msg }) {
    await sock.sendMessage(msg.key.remoteJid, {
      text: "Hello World 🌍"
    });
  }
};

✔ That’s it — auto-loaded instantly.

🛠️ Debugging Guide
Issue	Fix
Bot not responding	Check PREFIX
Command not found	Check plugin name
Crash	Check console logs
Media fail	API issue
🔐 Environment Variables
SESSION_ID=
PREFIX=!
OWNER_NUMBERS=923216046022,923071639265,923477262704
⚙️ Add Variables (Heroku)
Open Heroku App
Settings → Config Vars
Add:
KEY → VALUE
🚀 Deployment Guide
🟣 Heroku (Recommended)
<p align="center"> <a href="https://heroku.com/deploy"> <img src="https://www.herokucdn.com/deploy/button.svg"> </a> </p>

Steps:

Upload repo to GitHub
Connect GitHub → Heroku
Deploy
Add ENV vars
Done ✅
⚡ Local Run
npm install
node index.js
🌍 Supported Platforms
Platform	Status
Heroku	✅
Render	✅
Railway	✅
VPS	✅
Replit	⚠️
✏️ Customization
Change Prefix
PREFIX=!
Edit Menu
plugins/system/menu.js
Add Feature
Create new plugin file
🔥 Pro Tips
Keep each command in separate file
Use try/catch for stability
Use multiple APIs (fallback system)
Avoid heavy spam → prevents bans
📸 Preview
<p align="center"> <img src="https://files.catbox.moe/t5hs3i.jpg" width="250"/> </p>
📞 Contact
GitHub:
https://github.com/Mudassar-khan-M2K
Email:
mudassar.khan.og@gmail.com
⚠️ Disclaimer

This bot uses unofficial WhatsApp Web APIs.
Use responsibly. No guarantee of long-term stability.

🌟 Support

If you like this project:

⭐ Star the repo
🍴 Fork it
📢 Share it

<p align="center"> 🚀 <b>FLUX MD — Build Faster. Scale Smarter.</b> 🚀 </p>
