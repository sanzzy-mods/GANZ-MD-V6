/* let handler = async function (m, { conn }) {
try { 
conn.chatModify({ delete: true, lastMessages: [{key: m.key, messageTimestamp: m.messageTimestamp}]}, m.chat)
m.reply("chat ini telah dihapus pada whatsapp bot")
} catch {
m.reply("hapus chat gagal :(")
}

}
handler.help = ['clearchat (berpotensi merusak bot)'],
handler.help = ['owner']
handler.command = /^clearchat$/i
handler.owner = true
export default handler */
// Belum di fix