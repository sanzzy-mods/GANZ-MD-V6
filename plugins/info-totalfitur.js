import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let thum2 = 'https://telegra.ph/file/08d0001275c10376b1861.jpg' 
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}\n`,wm + '\n\n' + botdate, thum2, [['MENU','.menu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'BOT By Dv•',          previewType: 0,
                        thumbnail: fs.readFileSync("./media/dev.jpg"),
                        sourceUrl: sgh
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
export default handler