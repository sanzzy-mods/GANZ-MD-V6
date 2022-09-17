import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `Ada Apa broo!?`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
let thum = `https://telegra.ph/file/579113e790fe526d676cf.jpg`
/* const message = {
            jpegThumbnail: await (await fetch(thum)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'OFFICIAL GROUP',
                        url: sgc
                    }
                },
                {
                    urlButton: {
                        displayText: 'Chat Owner',
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
                        displayText: 'PING',
                        id: '.ping'
                    }
                },
            ]
        }
        return await conn.sendMessage(m.chat, message)*/
conn.reply(m.chat, info, m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa ya_-', sourceUrl: snh, thumbnail: fs.readFileSync('./media/dv.jpg')  }}})
}
handler.customPrefix = /^(tes|tess|test)$/i
handler.command = new RegExp

export default handler