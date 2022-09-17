import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw 'SN kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'SN Salah'
  user.registered = false
  m.reply('Kamu Berhasil keluar dari database\n\n*SilenceMD~*')
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler