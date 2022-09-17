import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: 'File Simple.js', 
  jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, `*Sukses!* simple.js telah dikirim ke kontak Owner`,m)
conn.reply('6289631008798' + '@s.whatsapp.net', `*simple.js tanggal ${date}*`, m)
          conn.sendFile('6289631008798' + '@s.whatsapp.net', fs.readFileSync('./lib/simple.js'), 'simple.js', '', 0, 0, { mimetype: 'application/js', quoted: fdoc})
 }
 
 handler.help = ['asimple']
handler.tags = ['owner']
handler.command = /^ambil|a(simple|s)$/i
handler.rowner = true

export default handler