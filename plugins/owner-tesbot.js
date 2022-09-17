import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*🔥BOT Aktif!!*\n`,wm + '\n\n' + botdate, [['Menu','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Oke',          previewType: 0,
                        thumbnail: fs.readFileSync("./media/fangz.jpg"),
                        sourceUrl: snh
                      }}
})
}

handler.help = ['tesbot']
handler.tags = ['owner']
handler.command = ['tesbot']
handler.owner = true
export default handler
