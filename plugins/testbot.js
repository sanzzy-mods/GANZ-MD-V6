let handler = async (m, { conn }) => {
let info = ``.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT ONLINE BRO!!* 🧸', 'status@broadcast')
}

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler