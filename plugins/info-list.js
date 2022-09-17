let handler = async (m, { conn }) => {
let info = `
━━━━━━━▢ *INFO BOT* ▢━━━━━━━━`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "Test Speed", rowId: '.testspeed', description: '╰►Test Speed SilenceBOT' },
	    {title: "Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	    {title: "Rules", rowId: '.rules', description: '╰►S&K SilenceBOT' },
	{title: "Ping", rowId: '.ping', description: '╰►Speed SilenceBOT' },
	{title: "Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi SilenceBOT' },
	{title: "Version Bot", rowId: '.cekversi', description: '╰►Versi SilenceBOT' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	{title: "⛔ No Menu", rowId: '', description: '╰►No menu' },
	{title: "Creator", rowId: '.nameowner', description: '╰►Developer SilenceBOT' },
	{title: "Donasi", rowId: '.donasi', description: '╰►Support SilenceBOT Agar on 24 Jam' },
    {title: "Event", rowId: '.event', description: '╰►Event Dari Owner' },
	{title: "Sewa BOT", rowId: '.sewa', description: '╰►Sewa SilenceBOT' },
	{title: "Sapa Bot", rowId: '.salken', description: '╰►Menyapa SilenceBOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler