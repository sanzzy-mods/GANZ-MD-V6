let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `\n_Github Collab ADA_
AngelDark :
https://github.com/CyexSynMD

_Owner_
DaveKgw :
https://github.com/davekgw
KyamiCyx :
https://github.com/ShionMDv
Ahmad :
https://github.com/Dzox13524

`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*GITHUB*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

export default handler 