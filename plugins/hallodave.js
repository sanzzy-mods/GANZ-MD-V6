let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` `.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*✧───────···────────✧*\n*Hallo Juga Woy👋🏻* \n *Gimana Kabar Nya? >_<*', 'status@broadcast')
}
handler.customPrefix = /^(Hallo Dave|Hallo dave|hi dave|Hi dave|hi dep|hai dev|Hai dep|Hi dep|Hai dev)$/i
handler.command = new RegExp

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
 