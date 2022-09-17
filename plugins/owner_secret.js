let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 1000) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `* Pesan *\n\n*Dari* : Rahasia\n*Pesan* : ${pesan}\n\n *${global.wm}*`

    await conn.reply(korban + '@s.whatsapp.net', spam1)

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['pesan']
handler.tags = ['group']
handler.command = /^(pesan)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler 
