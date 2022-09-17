let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender
  
  let nom = `6289631008798`
  let ppown = await conn.profilePictureUrl(nom + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
  let nowner = `${nom.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `🔥𝗧𝗵𝗶𝘀 𝗶𝘀 𝗠𝘆 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗦𝗺𝗶𝗹𝗲𝘆 *ヅ*\n\n  📮 *Note :*\n• *Developer yg Baik ヅ*\n• Dia tidak menerima save contact\n• Dia berhak blockir tanpa alasan\n• Berbicaralah yang sopan & tidak spam\n• Dia akan respon tapi yang hanya berkaitan dengan BOT\n• Jangan Telfon Dia!\n• Chat gajelas = Block`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285346545126@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok2 = `6289631008798@s.whatsapp.net`
  try {

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok2.split('@')[0]}`, `Smileyヅ`, `👑 Developer BOT`, `🚫 Jangan Telfon Developer`, `davekoagow4@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://github.com/davekgw/`, `Jika ada jodoh PM🐦`],
  ], fkonn) 

  await conn.sendHydrated(m.chat, teksnomor, wm, ppown, "https://wa.me/" + nom, "Chat Smiley", null,null, [["Selengkapnya", '.ownerdave'], [null, null],[null,null]], sentMsg, {mentions: [m.sender]})

  } catch {

  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 

  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})

  }
}

handler.command = /^(owner2)$/i



export default handler

