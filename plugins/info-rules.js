let handler = async (m, { conn }) => {
let info = `
━━━━━━▢ *RULES* ▢━━━━━━

Baca Rulesnya ya kak😃

©2022 SilenceBOT Official 
`
const sections = [
   {
	title: `✃ RULES`,
	rows: [
	    {title: "❗Peringatan", rowId: '.banperingatan', description: 'Warn' },
	{title: "❗Banned Permanen", rowId: '.banpermanen', description: 'Banned selamanya' },
	{title: "❗Banned + Denda", rowId: '.bandenda', description: 'Banned + Denda' },
	{title: "❗Anti Banned", rowId: '.antibanned', description: 'Agar tidak terkena pelanggaran' },
	{title: "❗Note", rowId: '.bannote', description: 'Note Bot' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "CEK RULES",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['rules']
handler.tags = ['info', 'main']
handler.command = /^(rules(bot)?|peraturan)$/i
handler.private = false

export default handler
