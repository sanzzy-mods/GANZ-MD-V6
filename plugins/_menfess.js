const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let handler = m => m
export async function all(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log(m)
	if (m.text === 'Balas Pesan' && m.quoted.mtype == 'buttonMessage') return conn.reply("Silahkan kirim pesan balasan kamu.");
	let txt = `Hai kak @${mf.dari.split('@')[0]}, kamu menerima balasan nih.\n\nPesan yang kamu kirim sebelumnya:\n${mf.pesan}\n\nPesan balasannya:\n${m.text}\n`.trim();
	await this.reply(mf.dari, txt, null).then(() => {
		m.reply('Berhasil mengirim balasan.')
		await delay(1000)
		conn.sendMessage(m.chat, {delete: this.menfess[mf.id]})
		return !0
	})
}

