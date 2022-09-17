import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler  = async (m, { conn, usedPrefix: _p }) => {
	
let info = `*Hallo!*👋🏻\nSaya adalah SilenceBOT, Silence adalah Sebuah Bot RPG yg dibuat khusus untuk bersenang² bersama.\nSaya juga adalah Bot yang bisa membantumu dengan banyak fitur berguna, klik tombol dibawah ini jika kamu ingin menggunakan bot!`
let tem = `${moment.tz('Asia/Makassar').format('HH')}.${moment.tz('Asia/Makassar').format('mm')}.${moment.tz('Asia/Makassar').format('ss')} WITA`
let bottum = `https://telegra.ph/file/fa26b1b57eb59ce076d97.jpg`
let wm = global.wm

 let buttonMessage= {
'document':{'url':'https://github.com/davekgw'},
'mimetype':global.dxlsx,
'fileName':'Salam Kenal Bang😁',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':`Time : ${tem}`,
'body':global.titlebot,
'thumbnail':await(await fetch(bottum)).buffer(),
'sourceUrl':sig}},
'caption':info,
'footer':wm,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1},
{'buttonId':'.owner','buttonText':{'displayText':'Owner'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.command = /^(salken)$/i

export default handler