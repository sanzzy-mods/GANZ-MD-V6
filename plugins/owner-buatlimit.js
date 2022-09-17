let handler = async (m, { conn, args }) => {
	let list = Object.entries(global.db.data.users)
	let lim = !args || !args[0] ? 50 : isNumber(args[0]) ? parseInt(args[0]) : 50
	lim = Math.max(1, lim)
	list.map(([user, data], i) => (Number(data.limit = lim)))
		conn.reply(m.chat, `*Berhasil Membuat ${lim} Limit / User*\n~ Cek limit (.limit)`, m)
}
handler.help = ['limit'].map(v => 'b' + v)
handler.tags = ['owner']
handler.command = /^(blimit)$/i

handler.owner = true

export default handler 

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
