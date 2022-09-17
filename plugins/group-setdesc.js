let handler = async (m, { text }) => {

if(!text) throw 'Isi?'
  
 await conn.groupUpdateDescription(m.chat, text)
  return m.reply("Done.")
}

  handler.help = ['setdesc']
handler.tags = ['group']
handler.command = /^(setdesc)$/i

handler.group = true
handler.admin = true

export default handler
