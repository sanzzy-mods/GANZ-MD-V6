// MADE BY BOCHILGAMING
// RECODE BY DAVE

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
  before: `
%dash2

%m1 *I N F O  C M D* 
%m4 🅟 = *Premium*
%m4 🅛 = *Limit*
%m3

%m1 *I N F O  B O T*
%m4 Bot Name : *%me*
%m4 Mode : *%mode*
%m4 Platform : *%platform*
%m4 Size Session : *${megabit()} MB*
%m4 Prefix : [ *%_p* ]
%m4 Uptime : *%muptime*
%m4 Database : *%rtotalreg dari %totalreg*
%m3

%m1 *U S E R*
%m2 Name : %name
%m2 Tag : %tag
%m2 Status : *%prems*
%m2 Limit : *%limit*
%m2 Money : *%money*
%m2 Role : *%role*
%m2 Level : *%level [ %xp4levelup Xp For Levelup]*
%m2 Xp : *%exp / %maxexp*
%m2 Total Xp : *%totalexp*
%m3

%m1 *T O D A Y*
%m2 %ucpn
%m2 Days : %week
%m2 Date : %date
%m2 Time : ${moment.tz('Asia/Makassar').format('HH')}.${moment.tz('Asia/Makassar').format('mm')}.${moment.tz('Asia/Makassar').format('ss')} WITA
%m3
%readmore
`.trimStart(),
  header: '%cc *%category* %c1',
  body: '%c2 %cmd %isPremium %islimit',
  footer: '%c3',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'store', 'virtex', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main',
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'maker': 'Maker',
  'database': 'Database',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  'store': 'Store',
  'virtex': 'Virtex',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'store') tags = {
    'store': 'Store'
  }
  if (teks == 'virtex') tags = {
    'virtex': 'Virtex'
}
  try {
  	// DEFAULT MENU
      let dash = `*─────━•〔 DASHBOARD 〕•━─────*`
      let dash2 = `*─────━•[DASHBOARD]•━─────*`
  	let m1 = `*❖─···─〈*`
      let m2 = `*│𖥂*`
      let m3 = `*┗───···─────𖡹*`
      let m4 = `*│𖤓*`
      
      // COMMAND MENU
      let cc = `*╭────━•〔*`
      let c1 = `*〕•━────┐*`
      let c2 = `*│⌬*`
      let c3 = `*╰───···─────*❁\n`
      let c4 = `\n*Dv~*\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     `
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
      const sections = [
   {
	title: `━━━━━━▢ ▮𝗦𝘁𝗮𝘁𝘂𝘀 」 ▢━━━━━━`,
	rows: [
	    {title: `• Info Bot`, rowId: ".info", description: "Info nya SilenceBOT >_<"},
	    {title: `• Owner`, rowId: ".owner", description: "Ini Room Developer ku ^_^"},
	{title: `• Nomor Owner`, rowId: ".ownerr", description: "Ini nomor para owner •_•"},
	{title: `• Bot Stats`, rowId: ".botinfo", description: "Menampilkan Status Silence BOT"},
	{title: `• Test Speed`, rowId: ".testspeed", description: "Test kecepatan Silence BOT"},
	{title: `• Speed`, rowId: ".speed", description: "Kecepatan Respon Silence BOT..."},
	]
    },{
	title: `━━━━━━▢ ▮𝗠𝗲𝗻𝘂 」 ▢━━━━━━`,
	rows: [
	    {title: `⫹〚 All Menu 〛`, rowId: ".? all", description: "╰► Waduhh.. Langsung semuanya (≧▽≦)"},
	    {title: `⫹〚 Rpg 〛`, rowId: ".? rpg", description: "╰► Calon anak petualang nih... :3"},
	{title: `⫹〚 Exp 〛`, rowId: ".? xp", description: "╰► Kalau dah level 100 dapat hadiah (≧▽≦)"},
	{title: `⫹〚 Game 〛`, rowId: ".? game", description: "╰► Bg kamu main game apa?... >_<"},
	{title: `⫹〚 Fun 〛`, rowId: ".? fun", description: "╰► Fitur Gabut ysy ^^"},
	{title: `⫹〚 Kerang 〛`, rowId: ".? kerangajaib", description: "╰► Mau tanya apa sih bg?..."},
	{title: `⫹〚 Quotes 〛`, rowId: ".? quotes", description: "╰► Ada yg mau nyari topik nih... >.<"},
	{title: `⫹〚 Anime 〛`, rowId: ".? anime", description: "╰► Lah, Wibuu... Owner juga wibu sih :v"},
	{title: `⫹〚 Nsfw 〛`, rowId: ".? nsfw", description: "╰► Anak kecil ga boleh ya..."},
	{title: `⫹〚 Premium 〛`, rowId: ".? premium", description: "╰► Hanya khusus users premium..."},
	// {title: `⫹〚 Anonymous chat 〛`, rowId: ".? anonymous", description: "╰► Mau ngomong sama mantan kah? >.<"},
	{title: `⫹〚 Internet 〛`, rowId: ".? internet", description: "╰► Ga ada google ya kak..."},
	{title: `⫹〚 Downloader 〛`, rowId: ".? downloader", description: "╰► Jangan download yg aneh-aneh, Xixixi (≧▽≦)"},
	{title: `⫹〚 Stikers 〛`, rowId: ".? stiker", description: "╰► Kalau bikin sticker jangan di spam ya kak..."},
	{title: `⫹〚 Nulis 〛`, rowId: ".? nulis", description: "╰► Hati-hati ke tawan bu sri..."},
	{title: `⫹〚 Audio 〛`, rowId: ".? audio", description: "╰► Calon remixer nih haha ></"},
	{title: `⫹〚 Group 〛`, rowId: ".? group", description: "╰► Menu settingan buat group mu kak :D"},
	{title: `⫹〚 Admin 〛`, rowId: ".? admin", description: "╰► Yg bukan admin jangan make fitur ini >-<"},
	{title: `⫹〚 Database 〛`, rowId: ".? database", description: "╰► Simpen apa tuh.... >.<"},
	{title: `⫹〚 Tools 〛`, rowId: ".? tools", description: "╰► Butuh apa aja bot akan bantu -𐑂"},
	{title: `️️⫹〚 Info 〛`, rowId: ".? info", description: "╰► Info lowker kak?..."},
	{title: `⫹〚 Owner 〛`, rowId: ".? owner", description: "╰► Yg bukan Developer gausah nge klik fitur ini !"},
	{title: `⫹〚 Maker 〛`, rowId: ".? maker", description: "╰► Bikin logo apa ya enaknya?"},
	{title: `⫹〚 Store 〛`, rowId: ".? store", description: "╰► Anak jebeh ya kamu kak?"},
	{title: `⫹〚 Virtex 〛`, rowId: ".? virtex", description: "╰► Jangan kak bahaya -𐑂"},
	]
    },{
	title: `━━━━━━▢ ▮𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 」 ▢━━━━━━`,
	rows: [
	    {title: `『 Sewa BOT 』`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
	    {title: `『 Buy Script BOT 』`, rowId: ".owner", description: "Menampilkan list harga script BOT"},
	    {title: `『 UP Premium 』`, rowId: ".premium", description: "Menampilkan list harga upgrade premium"},
	    {title: `『 Get Hadiah 』`, rowId: ".claim", description: 'Mau hadiah nggak kak?... >.<'},
	{title: `『 Rating 』`, rowId: ".rate", description: 'Jangan kasih rate rendah dong :/'},
	{title: `『 My Profile 』`, rowId: ".profile", description: 'Siapa ya kamu?...'},
	]
	},{
	title: `━━━━━━▢ ▮𝗜𝗻𝗳𝗼 」 ▢━━━━━━`,
	rows: [
	    {title: `» Event`, rowId: ".event", description: "Event dari owner >.<"},
	    {title: `» Version`, rowId: ".cekversi", description: "Mau ngapain ya?..."},
	    {title: `» Referal`, rowId: ".ref", description: "Bagikan code undangan biar dapat hadiah...."},
	    {title: `» Script`, rowId: ".sc", description: `Source Code ${namebot}`},
	    {title: `» Rules`, rowId: ".rules", description: `Peraturan menggunakan ${namebot}`},
	    {title: `» Donasi`, rowId: ".donasi", description: 'Support BOT agar on 1 Minggu non stop'},
	  {title: `» Rating`, rowId: ".rate", description: 'Support BOT agar Semangat update'},
	  {title: `» Group`, rowId: ".groupbot", description: 'Jangan lupa mampir ya...'},
	  {title: `» Thanks To`, rowId: ".tqto", description: 'Kawan-kawan Yg membantu pembuatan bot ini...'},
	  {title: `» Kata Penutup`, rowId: ".galau", description: 'Terima kasih yang udah menggunakan bot ini dengan baik (≧▽≦)/'},
      ]
    },
]

let usrs = db.data.users[m.sender]
let tek = `*❅${ucapan()} ${conn.getName(m.sender)}*
Gunakan BOT dengan Bijak!!
Patuhi Setiap Rules agar tidak di banned BOT...

*▢═════〔 llı INFO ıll 〕═════▢*
*𖥂* 🅟 = *Premium*
*𖥂* 🅛 = *Limit*

*▢═════〔 llı USER ıll 〕═════▢*
*𖥂* Name : ${usrs.registered ? usrs.name : conn.getName(m.sender)}
*𖥂* Tags : @${m.sender.split`@`[0]}
*𖥂* Status : *${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}*
*𖥂* Level: *${usrs.level}*
*𖥂* Role: *${usrs.role}${usrs.premiumTime > 1 ? `*
*𖥂* Limit : *${usrs.limit}*
*𖥂* Premium : *${usrs.premiumTime > 1 ? 'Yes': 'No'}*
*𖥂* Expired Premium : 
${clockStringP(usrs.premiumTime - new Date())}` : ''}

*▢═════〔 llı BOTZ ıll 〕═════▢*
*𖤓* Uptime : *${mpt}*
*𖤓* Admin : *AngelDark*
*𖤓* Size Session : *${megabit()} MB*
*𖤓* Users : *${Object.keys(global.db.data.users).length}*
*𖤓* Register : *${Object.keys(global.db.data.users).length}*
*𖤓* Unregister : *${Object.values(global.db.data.users).filter(user => user.registered == true).length}*
*𖤓* Platform : *${os.platform()}*
*𖤓* Mode : *${global.opts['self'] ? 'Private' : 'Publik'}*
          
     *${botdate}*

`
const listMessage = {
  text: tek,
  footer: '*Silence BOT~*',
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `Click Here ᐢ..ᐢ`,
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
    
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Makassar').format('HH')
    let wibm = moment.tz('Asia/Makassar').format('mm')
    let wibs = moment.tz('Asia/Makassar').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash, dash2,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧𝗶𝗺𝗲 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  let fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": wm,
                  "h": `Nekohime`,
                  'duration': '99999999', 
                  'gifPlayback': 'true', 
                  'caption': bottime,
                  'jpegThumbnail': await(await fetch('https://telegra.ph/file/08d0001275c10376b1861.jpg')).buffer(),
                         }
                        }
                     }
  let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch('https://telegra.ph/file/579113e790fe526d676cf.jpg')).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'text/rtf'
    let td = `${pickRandom([d1,d2,d3,d4,d5])}`
    
    //------- BUTTON DOC WITH EXTERNAL ADS
    // MAMPUS DI ENC :v
/* const _0x187932 = _0x5c09;
function _0x5c09(_0x28b840, _0x244043) {
    const _0x1766bb = _0x1766();
    return (
        (_0x5c09 = function (_0x5c09dc, _0x158321) {
            _0x5c09dc = _0x5c09dc - 0x1bb;
            let _0x4031df = _0x1766bb[_0x5c09dc];
            return _0x4031df;
        }),
        _0x5c09(_0x28b840, _0x244043)
    );
}
(function (_0x1c9e83, _0x2eef01) {
    const _0x5e85ab = _0x5c09,
        _0x179660 = _0x1c9e83();
    while (!![]) {
        try {
            const _0x4c7814 =
                (-parseInt(_0x5e85ab(0x1d0)) / 0x1) * (-parseInt(_0x5e85ab(0x1bd)) / 0x2) +
                (parseInt(_0x5e85ab(0x1c4)) / 0x3) * (parseInt(_0x5e85ab(0x1bf)) / 0x4) +
                (parseInt(_0x5e85ab(0x1cc)) / 0x5) * (-parseInt(_0x5e85ab(0x1d1)) / 0x6) +
                (parseInt(_0x5e85ab(0x1c1)) / 0x7) * (parseInt(_0x5e85ab(0x1bc)) / 0x8) +
                (parseInt(_0x5e85ab(0x1cd)) / 0x9) * (-parseInt(_0x5e85ab(0x1c7)) / 0xa) +
                (parseInt(_0x5e85ab(0x1cb)) / 0xb) * (-parseInt(_0x5e85ab(0x1be)) / 0xc) +
                parseInt(_0x5e85ab(0x1ce)) / 0xd;
            if (_0x4c7814 === _0x2eef01) break;
            else _0x179660["push"](_0x179660["shift"]());
        } catch (_0x2b3360) {
            _0x179660["push"](_0x179660["shift"]());
        }
    }
})(_0x1766, 0x70ad5);
let buttonMessage = {
    document: { url: sgc },
    mimetype: td,
    fileName: global["wm"],
    fileLength: fsizedoc,
    pageCount: fpagedoc,
    contextInfo: {
        forwardingScore: 0x22b,
        isForwarded: !![],
        externalAdReply: { mediaUrl: global[_0x187932(0x1c8)], mediaType: 0x2, previewType: _0x187932(0x1c9), title: global["titlebot"], body: global["titlebot"], thumbnail: await (await fetch('https://telegra.ph/file/08d0001275c10376b1861.jpg'))[_0x187932(0x1ca)](), sourceUrl: sgc },
    },
    caption: text,
    footer: botdate,
    buttons: [
        { buttonId: ".owner", buttonText: { displayText: "Owner" }, type: 0x1 },
        { buttonId: ".ping", buttonText: { displayText: "Speed" }, type: 0x1 },
        { buttonId: ".menu", buttonText: { displayText: "Menu" }, type: 0x1 },
    ],
    headerType: 0x6,
};
await conn[_0x187932(0x1c2)](m[_0x187932(0x1cf)], buttonMessage, { quoted: m, mentionedJid: [m[_0x187932(0x1c3)]] });
function _0x1766() {
    const _0x1c60e8 = [
        "3ezQcUH",
        ".ping",
        ".menu",
        "725770ccnUBU",
        "sig",
        "pdf",
        "buffer",
        "305624SHQwwY",
        "233195fjGJSZ",
        "72BjUaMS",
        "2869867kBKaey",
        "chat",
        "6NokiEm",
        "72PsFaxu",
        "Owner",
        "1832yREmVQ",
        "205026IsvCrH",
        "132IBvmfp",
        "3329164htczQJ",
        "Speed",
        "7315FCLnNH",
        "sendMessage",
        "sender",
    ];
    _0x1766 = function () {
        return _0x1c60e8;
    };
    return _0x1766();
} */

//-------DOC TEMPLATE
/*    const message = {
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
            fileName: '𝗧𝗜𝗠𝗘 : ' + wktuwib,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot + '\n⚡ Supported by Smile Team',
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://github.com/devkgw'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: sgc
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: '⚔ RPG',
                        id: '.? rpg'
                    }
                },
            ]
        } */
        //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
    //------------------- BUTTON VID
    conn.sendButton(m.chat, text, wm, 'https://telegra.ph/file/579113e790fe526d676cf.jpg', [['Owner', '.owner'],['Menu', '.menu2']], fkon, { gifPlayback: true, contextInfo: { forwardingScore: 99999, isForwarded: true, externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./media/dv.jpg') }}})
    
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu2']
handler.command = /^(menu2|help|\?)$/i

handler.register = true
handler.exp = 200

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Year*\n',  mo, ' *Month*\n', d, ' *Day*\n', h, ' *Hour*\n', m, ' *Minute*\n', s, ' *Second*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Makassar').format('HH')
  let res = "Selamat DiniHari"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function megabit() {
    let stats = fs.statSync("session.data.json")
    let ukuran_mb = stats.size / (1024*1024)
    return ukuran_mb.toFixed(1)
    }