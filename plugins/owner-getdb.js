import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Processing...')
    let sesi = await fs.readFileSync('./lib/database.js')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/js', fileName: 'database.js' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['owner']
handler.command = /^(getdb)$/i

handler.rowner = true

export default handler