import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.stickpack, global.stickauth)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(thx|thank|thanks)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/06a27a93b66f63a5a067e.jpg",
 "https://telegra.ph/file/ae5b1465de60bad17404b.mp4",
 "https://telegra.ph/file/b65fd342005a129791ef1.mp4",
 "https://telegra.ph/file/506cabf7969bebf03e3b6.png",
]
