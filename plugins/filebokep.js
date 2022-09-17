let handler  = async (m, { conn }) => {
	
	await m.reply('[❗] Tunggu Sebentar:v.')
  conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
}
handler.help = ['bkep (free)']
handler.tags = ['nsfw']
handler.command = /^(bkep)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.bokep = [
'Tapi boong, wkwkw kalo mau free bkp tanya owner hanya dia yg tau:v',
]