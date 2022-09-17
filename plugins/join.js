import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮BOT gak bisa join sana sini sembarangan (≧∇≦)/`
let thumbs = `https://telegra.ph/file/579113e790fe526d676cf.jpg`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbs },
            jpegThumbnail: await (await fetch(thumbs)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm + '\nSupport SilenceBOT',
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: 'https://chat.whatsapp.com/CUZny6ag4RNIz62t8GZpVy',
                    }
                },
                {
                    urlButton: {
                        displayText: 'Creator Bot',
                        url: 'https://wa.me/6289631008798',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'SPEED',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'SEWA BOT',
                        id: '.sewa'
                    }
                },
            ]
        }
       // conn.sendMessage(m.chat, message, m)
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'awokawok minta owner masukin!', 'status@broadcast')
}
handler.help = ['join']
handler.tags = ['info']
handler.command = /^(join)$/i

export default handler