let handler = async (m, { conn }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
	const sukses = './src/avatar_contact.png'
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nihhh 1 Untuk Semua', m)
 conn.sendFile(m.chat, sukses, 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['bkp']

handler.command = /^(bkp)$/i
handler.group = false
handler.private = false
handler.premium = true
handler.register = true
handler.limit = true
export default handler 