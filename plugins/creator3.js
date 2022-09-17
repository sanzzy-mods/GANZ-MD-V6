let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------------ BIO OWNER 3
let ahmad = await conn.profilePictureUrl(admin2 + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let admiad= '6288990007937'
let teksahmad = `━━━━━━━━▢ *BIODATA* ▢━━━━━━━━
*💌 Nama* : Dzox
*💥 Status* : Admin²
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 12 Mei 2006
*🎨 Umur* : 16
*🧮 Kelas* : 11
*🧩 Hobby* : Main game, Recode script, Nonton Anime
*💬 Sifat* : menyukai kebebasan, 2 wajah, tydack ramah, nolep
*🗺️ Tinggal* : Indonesia, Jawa Timur, Banyuwangi
*❤️ Suka* : Waifu wangy:v
*💔 Benci* : Sifatku! 

*- - sᴋɪʟʟs: - -* 
> JavaScript [50.7%]
> Python [10.4%]
> CSS [0.2%]
> Html [40.9%]
> Recode [89.8%]
> Create Webs [2.9%]

───────[ SOSIAL MEDIA ]───────

🥏 *WA* wa.me/6288990007036
🐈 *Github:* Private ygy:v
`
conn.sendHydrated(m.chat, teksahmad, wm, ahmad, "https://wa.me/" + admiad, "Chat Dzox", null,null, [["Oke", 'Oke'], ['Menu', '.menu'],[null,null]], m)
}

handler.command = /^(ownerahmad)/i

export default handler
