let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `━━━━━━▢ *RULES* ▢━━━━━━

> *“Minta maaf ke owner agar tidak terkena pelanggaran!!”*
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
handler.command = /^antibanned$/i

export default handler


//BISA KALIAN GANTI BEBAS AJA, HAPUS? GPP