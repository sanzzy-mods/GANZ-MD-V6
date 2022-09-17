let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender

  let noah = `6287734910547`
  let ppown = await conn.profilePictureUrl(noah + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
  let nowner = `${noah.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `🔥𝗧𝗵𝗶𝘀 𝗶𝘀 𝗠𝘆 𝗢𝘄𝗻𝗲𝗿 𝗞𝘆𝗮𝗺𝗶𝗖𝘆𝘅\n\n     📮 *Note :*\n• *Owner yg Baik Hati!!*\n• Owner tidak menerima save contact!\n• Owner berhak blockir tanpa alasan\n• Berbicaralah yang sopan & tidak spam\n• Owner Hanya merespon yang berkaitan dengan BOT\n• No Telp\n• Chat gajelas = Block`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6287734910547@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok3 = `6287734910547@s.whatsapp.net`
  try {

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok3.split('@')[0]}`, `Kyami`, `🎗 Team Developer BOT`, `🚫 Don't call Kyami`, `alvinrinegar@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://github.com/ShionMDv/`, `Just Try!!🪐`],
  ], fkonn) 

  await conn.sendHydrated(m.chat, teksnomor, wm, ppown, "https://wa.me/" + noah, "Chat Kyami", null,null, [["Selengkapnya", '.owneralvin'], [null, null],[null,null]], sentMsg, {mentions: [m.sender]})

  } catch {

  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 

  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})

  }
}

handler.command = /^(owner3)$/i



export default handler

