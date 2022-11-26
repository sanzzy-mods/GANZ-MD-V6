//SCRIPT RECODE BY DAVE💌
// JANGAN DI HAPUS📣

//GA TAU CARA EDIT NYA? CHAT AUTHOR↑↑↑

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

//WAKTU BISA DI GANTI KE JAKARTA (WIB) /MAKASSAR (WITA)

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
let witah = moment.tz('Asia/Makassar').format('HH')
    let witam = moment.tz('Asia/Makassar').format('mm')
    let witas = moment.tz('Asia/Makassar').format('ss')
    let wktuwib = `${witah}H ${witam}M ${witas}S`
    
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
      
    
/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/imleviofc'
global.sgh = 'https://github.com/davekgw'
global.sgc = 'https://chat.whatsapp.com/FM7pIjOxQKOFqDsEVrDEdz'
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6283814346766'
global.nomorown = '6283831242402' //Dave
global.adminn = '6285172446692' //Dave //JANGAN DI GANTI BAGIAN INI KARNA ADA DI CREATOR, CREATOR2 & CREATOR3
global.admin = '6285172446692' //Alvin /INI LAGI
global.admin2 = '6285172446692' //Ahmad //INI JUGA
global.namebot = 'YUDI BOTZ 来'
global.nameown = 'BNG YUDI 来'


/*⫘⫘⫘⫘ STAFF ⫘⫘⫘⫘⫘*/
global.owner = [
  ['6283831242402'],
  ['6283831242402', 'LEVI 来', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'davekoagow',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = 'YUDI BOTZ 来' //Main Watermark
global.wm2 = 'Created By YUDI 来'
global.wm3 = '❁ YUDI BOTZ 来'
global.botdate = `⫹⫺ Date : ${week} ${date}`
global.bottime = `Time : ${wktuwib}`
global.titlebot = '🌱 𝙍𝙋𝙂 | Whatsapp Bot'
global.author = '©YUDI BOTZ 来'


/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/

// INI JANGAN DI GANTI 
global.thumb = 'https://telegra.ph/file/579113e790fe526d676cf.jpg' //Main Thumbnail 
global.thumb2 = 'https://telegra.ph/file/08d0001275c10376b1861.jpg'
global.thumbbc = 'https://telegra.ph/file/5fa7fcb5225c85f1cab25.jpg' //For broadcast

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '```[ ! ] Wait....```'
global.eror = '*Akses Ditolak!!*'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://i.postimg.cc/SsPTYJqJ/ff1a0dc41ded2e9930cfa9a1416a797c.jpg'

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
global.pmenus = '*│𖤓*' //pembatas menu selector

global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = '𖥸'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = '© YUDI BOTZ 来'
global.stickauth = `YUDI BOTZ 来`
global.multiplier = 100 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      role: '🎖',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰',
      arlok: '🧭'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
