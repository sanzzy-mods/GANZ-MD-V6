let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.db.data.users[m.sender].exp = 1000000000
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TULIS SPERTI ITU/SALIN AJA*', 'status@broadcast')
}
handler.command = /^(cheatexp)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
