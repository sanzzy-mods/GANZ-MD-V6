import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.stickpack, global.stickauth)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(hmm|hmmm|hmmmm|hm|hmmmmm)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
"https://telegra.ph/file/f7f7b33fd6f38075f5b3b.png",
"https://telegra.ph/file/c5508e20b6d2cc67cfc33.png",
"https://telegra.ph/file/7759bade4f71e57196014.png",
"https://telegra.ph/file/7cd22dcd8741824009499.png",
"https://telegra.ph/file/135d36cbb903789dcf24a.png",
"https://telegra.ph/file/95b5087bff416e41e740f.png",
"https://telegra.ph/file/5845e4c9d8054d35a0931.mp4",
"https://telegra.ph/file/ec931508ad79422dc132c.png",
"https://telegra.ph/file/69374b9ef1ec3c4c17e4c.png",
"https://telegra.ph/file/665245e5227cb76d68ef2.png",
"https://telegra.ph/file/012ad6e1c369af8b7ede2.mp4",
"https://telegra.ph/file/fba49feb09988beb7cf5b.png",
]
