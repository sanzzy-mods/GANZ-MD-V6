import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/apa-sayang.opus'
conn.sendFile(m.chat, vn, './mp3/apa-sayang.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^(bot|hi bot|hii bot|hiii bot|hy)$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
