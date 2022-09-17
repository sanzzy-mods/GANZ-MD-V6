let handler = async(m, { conn }) => {
  const sok2 = `6285156973045@s.whatsapp.net`
  const sok3 = `6287734910547@s.whatsapp.net`
  const sok4 = `6288990007937@s.whatsapp.net`
  let name = m.sender
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6289631008798@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  await conn.sendContactArray(m.chat, [
    [`${owner[0]}`, `Smileyヅ`, `👑 Developer BOT`, `🚫 Don't call Developer`, `davekoagow4@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://github.com/davekgw/`, `Jika ada jodoh PM🐦`],
    [`${sok2.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `🔥 Bot WhatsApp 🐣`, `📵 Don't Spam/Call me 🙂`, `Nothing`, `🏴‍☠️ Asia!`, `🚀 https://github.com/davekgw/`, `Hanya bot biasa yang kadang suka eror!!`],
    [`${sok3.split('@')[0]}`, `Kyami`, `🎗 Team Developer BOT`, `🚫 Don't call Owner`, `alvinrinegar@gmail.com`, `🇮🇩 Indonesia`, `🚀 https://github.com/ShionMDv/`, `Just Try!!🪐`],
    [`${sok4.split('@')[0]}`, `Dzox`, `🎗 Team Developer BOT`, `🚫 Don't call Owner`, `Nothing`, `🇮🇩 Indonesia`, `🚀 https://github.com/Dzox13524/`, `Just Do It!!👾`],
  ], fkontak) 
}
handler.help = ['ownerr']
handler.tags = ['info']
handler.command = /^(ownerr)$/i

export default handler 