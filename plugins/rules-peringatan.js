let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `━━━━━━▢ *RULES* ▢━━━━━━

 > *PERINGATAN* :
┃• Telpon/VC Owner = Blok Otomatis
`
const templateButtons = [
    {index: 1, quickReplyButton: {displayText: 'Rules', id: '.rules'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.tags = ['info']
handler.command = /^banperingatan$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP