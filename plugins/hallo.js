let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*Hyy bruhhh*👋🏻\n\n*Saya SilenceBOT salken yaa!* 😆`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Chat Owner', url: 'https://wa.me/6289631008798'}},
    {index: 2, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 3, quickReplyButton: {displayText: 'RPG', id: '.? rpg'}}
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.customPrefix = /^(hy|hallo|halo|hay|hi)$/i
handler.command = new RegExp

export default handler