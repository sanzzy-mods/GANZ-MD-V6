let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------------ BIO OWNER 2
let alvin = await conn.profilePictureUrl(admin + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let admia = '6287734910547' 
let teksalvin = `━━━━━━━━▢ *BIODATA* ▢━━━━━━━━
*💌 Samaran* : KyamiCyx
*🪐 Status* : Admin¹
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 15 Maret 2004
*🎨 Umur* : 18
*🧮 Kelas* : Udh Tamat
*🧩 Hobby* : Recode Bot, Turu Brutal, Mikir gajelas
*💬 Sifat* : Baik, menyukai kebebasan, 2 wajah, tydack ramah 
*🗺️ Tinggal* : Indonesia, Jateng, Demak
*❤️ Suka* : warnah pink, abu², waifu wangy:v, kucing peduli
*💔 Benci* : anak alay, autis, anak epep, sok asik, bucin alay, tolol!

*- - sᴋɪʟʟs: - -* 
> JavaScript [70.7%]
> Python [20.0%]
> CSS [0%]
> Html [30.9%]
> Recode [90.0%]
> Create Webs [5.0%]

───────[ SOSIAL MEDIA ]───────

📷 *Ig:* _alv.stn
🧸 *Fb:* Private ygy
🥏 *WA* wa.me/6287734910547
🐈 *Github:* https://github.com/ShionMDv
🎶 *Tiktod:* tiktok.com/@wvinz
`
conn.sendHydrated(m.chat, teksalvin, wm, alvin, "https://wa.me/" + admia, "Chat Kyami", null,null, [["Owner Dzox", '.owner4'], ['Menu', '.menu'],[null,null]], m)
}

handler.command = /^(owneralvin)/i

export default handler
