let handler = async (m, { conn }) => {
let info = `
━━━━━━▢ *GROUP BOT* ▢━━━━━━
`
const sections = [
   {
	title: `𝗝𝗢𝗜𝗡 𝗞𝗘 𝗚𝗥𝗨𝗣 𝗢𝗙𝗙𝗜𝗖𝗜𝗔𝗟 𝗕𝗢𝗧\n\n\n━━━〔 Dᴏɴ'ᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕━━━`,
	rows: [
	    {title: 'Group SmileyBotz', description: "Group Utama SmileyBotz", rowId:".gcbot"},
	    {title: 'Group SilenceBOT', description: "Group Utama SilenceBOT", rowId:".gcbot2"},
        {title: 'Owner', description: "Developer SilenceBOT >ω<", rowId:".owner"},
        {title: 'Info SilenceBOT', description: "Info SilenceBOT >ω<", rowId:".info"},
        {title: 'Donasi', description: "Donasi Untuk SilenceBOT ≧▽≦", rowId:".donasi"},
        {title: 'Menu', description: "Back to menu", rowId: ".menu"},
	    ]
      },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Klik di sini",
  sections
}
await // conn.sendMessage(m.chat, listMessage, { quoted: m})
conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner'], ['Menu','.menu'], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler