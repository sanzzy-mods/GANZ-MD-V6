import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(ok|oke)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/2ef99349584d06bd848c5.png",
 "https://telegra.ph/file/ecacc04518bf964f36ef1.png",
 "https://telegra.ph/file/ad9e198ddacefbb5efb65.mp4",
 "https://telegra.ph/file/d124da1a17180697494b9.png",
 "https://telegra.ph/file/127960668334f06b07109.mp4",
 "https://telegra.ph/file/b65fd342005a129791ef1.mp4",
 "https://telegra.ph/file/2ddc5b038d085f0553988.mp4",
 "https://telegra.ph/file/b9e69d96cfa6a73927ffd.png",
 "https://telegra.ph/file/506cabf7969bebf03e3b6.png",
 https://telegra.ph/file/f7f7b33fd6f38075f5b3b.png",
]
