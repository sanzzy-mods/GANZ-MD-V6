/* let handler = async (m, { conn, text, args }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (!who) throw `tag orangnya!`
    if (global.owner.includes(who.split`@`[0])) throw 'dia sudah menjadi owner !'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang owner !`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.owner = true

export default handler*/
//Kalo mau tambahin owner di config.js langsung