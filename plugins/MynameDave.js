let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
     Ini Nama Pembuat BOT
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🔥Ryuu-Kawai🔥', 'status@broadcast')
}
handler.command = /^(nameowner)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 
