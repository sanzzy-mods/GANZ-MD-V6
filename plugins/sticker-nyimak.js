import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.stickpack, global.stickauth)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(nyimak)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/9b8318402e2ee881f0765.jpg",
"https://telegra.ph/file/ae5b1465de60bad17404b.mp4",
"https://telegra.ph/file/1c2be972e327da27e72af.mp4",
"https://telegra.ph/file/405bb9def24c77014c951.png",
"https://telegra.ph/file/135d36cbb903789dcf24a.png",
"https://telegra.ph/file/95b5087bff416e41e740f.png",
"https://telegra.ph/file/b9e69d96cfa6a73927ffd.png",
"https://telegra.ph/file/358d2a8a718100d5b877b.png“,
]
