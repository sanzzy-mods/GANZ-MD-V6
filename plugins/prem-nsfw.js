//   •-- MADE BY --•
//   | DAVE
//   •-------------•
// CREDITS ! JANGAN DIUBAH, JANGAN DIHAPUS !!


//------ FUNCTION & MODULE
function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
     }
   
let { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
import neko from 'nekos.life'
//---------------------------------
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	
	// ------- OTHER ------
  if (global.db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '📣 Fitur NSFW Belum dinyalakan di group',botdate, null, [['📛ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
  
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let ch = db.data.chats[m.chat].premnsfw
  //--------------------------

//---------------------SOURCE

//> Default
let res = 'https://api.lolhuman.xyz/api/random/nsfw/'
let api = '?apikey=dfb0b3ca5b33ee94e7219b0e'

//> Lolhuman
let resl = 'https://api.lolhuman.xyz/api/random2/'
let apil = '?apikey=dfb0b3ca5b33ee94e7219b0e'

//> Xteam
let xres = 'https://api.xteam.xyz/randomimage/'
let xapi = '?APIKEY=NezukoTachibana281207'

//> Heroku
let hrk = 'https://shion-restapi.herokuapp.com/api/nsfw/'
let hrpi = '?apikey=APIKEY'
//--------------------------------

// ••••••••••••••••• OPTIONS •••••••••••

// > Example :
// OPTIONS
// • false = Free
// • true = premium

//+- Contoh: -+
// let nsfww = (ch == true ? false : <Options, pilih true atau false>)

//### *FREE* ###
// let nsfww = (ch == true ? false : false)

//### *PREM* ###
// let nsfww = (ch == true ? false : true)

let ahegao = (ch == true ? false : true)
let anal = (ch == true ? false : true)
let ass = (ch == true ? false : true)
let blowjob = (ch == true ? false : true)
let cums = (ch == true ? false : true)
let ecchi = (ch == true ? false : true)
let ero = (ch == true ? false : true)
let erofeet = (ch == true ? false : true)
let erogirl = (ch == true ? false : true)
let holoero = (ch == true ? false : true)
let erokitsune = (ch == true ? false : true)
let eroneko = (ch == true ? false : true)
let eroyuri = (ch == true ? false : true)
let feet = (ch == true ? false : true)
let femdom = (ch == true ? false : true)
let futanari = (ch == true ? false : true)
let girlsolo = (ch == true ? false : true)
let hentai = (ch == true ? false : true)
let holo = (ch == true ? false : true)
let kitsune = (ch == true ? false : true)
let kuni = (ch == true ? false : true)
let loli = (ch == true ? false : true)
let manga = (ch == true ? false : true)
let milf = (ch == true ? false : true)
let mstrb = (ch == true ? false : true)
let neko = (ch == true ? false : true)
let panties = (ch == true ? false : true)
let pussy = (ch == true ? false : true)
let oppai = (ch == true ? false : true)
let spank = (ch == true ? false : true)
let tentacles = (ch == true ? false : true)
let thighs = (ch == true ? false : true)
let tits = (ch == true ? false : true)
let trap = (ch == true ? false : true)
let uniform = (ch == true ? false : true)
let waifu = (ch == true ? false : true)
let yaoi = (ch == true ? false : true)
let yuri = (ch == true ? false : true)
//-------------------------------------

//---------- TEXT -----------
let next = 'Next'
let fot = botdate
let txtprem = '📮Fitur ini khusus User Premium\nUntuk menggunakan fitur ini upgrade premium anda ! 📞'
let p = '🅟 | '
let f = 'Ⓕ | '

let tekk = `\`\`\`➩ Random Image\nNsfw ${args[0] ? args[0].capitalize() : false}\`\`\` `
let tade = `\`\`\`➩ Apikeynya Cuma Bisa 10 Foto/Hari\nNsfw ${args[0] ? args[0].capitalize() : false}\`\`\` `
  let teks = `┊› 📮 Klik NSFW dibawah ini!
┊› Atau ketik ${usedPrefix}nsfw blowjob 
❏──···––

*☞* Apikey di fitur ini bukan premium\n     jadi fitur yg ada tanda 10/1\n     hanya menampilkan 10 foto perhari\n     kalau fotonya tidak muncul\n     berarti sudah mencapai batas🙏🏻\n`
//---------------------------

//--------- BUTTON SELECTIONS ----------
const sections = [
   {
	title: 'HENTAI MENU',
	rows: [
	{title: `${ ahegao == true ? p : f}` + "A • Ahegao", rowId: ".nsfw ahegao"},
	{title: `${ ass == true ? p:f}` + "A • Ass", rowId: ".nsfw ass"},
	{title: `${ blowjob == true ? p:f}` + "B • BlowJob", rowId: ".nsfw blowjob"},
	{title: `${ ecchi == true ? p:f}` + "E • Ecchi 10/1", rowId: ".nsfw ecchi"},
	{title: `${ ero == true ? p:f}` + "E • Ero", rowId: ".nsfw ero"},
	{title: `${ hentai == true ? p:f}` + "H • Hentai", rowId: ".nsfw hentai"},
    {title: `${ loli == true ? p:f}` + "L • Loli 10/1", rowId: ".nsfw loli"},
	{title: `${ manga== true ? p:f}` + "M • Manga", rowId: ".nsfw manga"},
	{title: `${ milf == true ? p:f}` + "M • Milf 10/1", rowId: ".nsfw milf"},
	{title: `${ mstrb == true ? p:f}` + "M • Mstrb", rowId: ".nsfw mstrb"},
	{title: `${ neko == true ? p:f}` + "N • Neko", rowId: ".nsfw neko"},
	{title: `${ panties == true ? p:f}` + "P • Panties", rowId: ".nsfw panties"},
	{title: `${ pussy == true ? p:f}` + "P • Pussy", rowId: ".nsfw pussy"},
	{title: `${ tentacles == true ? p:f}` + "T • Tentacles", rowId: ".nsfw tentacles"},
	{title: `${ thighs == true ? p:f}` + "T • Thighs", rowId: ".nsfw thighs"},
	{title: `${ trap == true ? p:f}` + "T • Trap", rowId: ".nsfw trap"},
	{title: `${ uniform == true ? p:f}` + "U • Uniform", rowId: ".nsfw uniform"},
	{title: `${ waifu == true ? p:f}` + "W • Waifu", rowId: ".nsfw waifu"},
	{title: `${ yuri == true ? p:f}` + "Y • Yuri", rowId: ".nsfw yuri"}, 
	/*{title: `${ anal == true ? p:f}` + "A • Anal", rowId: ".nsfw anal"},
	{title: `${ cums == true ? p:f}` + "C • Cumsluts", rowId: ".nsfw cums"},
	{title: `${ erofeet == true ? p:f}` + "E • Ero Feet", rowId: ".nsfw erofeet"},
	{title: `${ erogirl == true ? p:f}` + "E • Ero Girl", rowId: ".nsfw erogirl"},
	{title: `${ holoero == true ? p:f}` + "E • Ero Holo", rowId: ".nsfw holoero"},
	{title: `${ erokitsune == true ? p:f}` + "E • Ero Kitsune", rowId: ".nsfw erokitsune"},
	{title: `${ eroneko == true ? p:f}` + "E • Ero Neko", rowId: ".nsfw eroneko"},
	{title: `${ eroyuri== true ? p:f}` + "E • Ero Yuri", rowId: ".nsfw eroyuri"},
	{title: `${ feet == true ? p:f}` + "F • Feet", rowId: ".nsfw feet"},
	{title: `${ femdom == true ? p:f}` + "F • Femdom", rowId: ".nsfw femdom"},
	{title: `${ futanari == true ? p:f}` + "F • Futanari", rowId: ".nsfw futanari"},
	{title: `${ girlsolo == true ? p:f}` + "G • Girl Solo", rowId: ".nsfw girlsolo"},
	{title: `${ holo == true ? p:f}` + "H • Holo", rowId: ".nsfw holo"},
	{title: `${ kitsune == true ? p:f}` + "K • Kitsune", rowId: ".nsfw kitsune"},
	{title: `${ kuni == true ? p:f}` + "K • Kuni", rowId: ".nsfw kuni"},
    {title: `${ oppai == true ? p:f}` + "O • Oppai", rowId: ".nsfw oppai"},
	{title: `${ spank == true ? p:f}` + "S • Spank", rowId: ".nsfw spank"},
	{title: `${ tits == true ? p:f}` + "T • Tits", rowId: ".nsfw tits"},
	{title: `${ yaoi == true ? p:f}` + "Y • Yaoi", rowId: ".nsfw yaoi"}, */
	]
    },
]

const listMessage = {
  text: teks,
  footer: '┏- - - - -  INFO CMD - - - - -\n┊ 🅟 = Premium\n┊ Ⓕ = Free\n┗•',
  title: `❏––––[ *NSFW* ]–––`,
  buttonText: "- -NSFW- -",
  sections
}
//--------------------------------


//------------ CASE NSFW ! ------------
  try {
    if (/(nsfw)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
case 'ahegao':
        if (ahegao == true) { 
	    if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		}
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ahegao' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
          break
          
case 'anal':
         if (anal == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
         }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'anal' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
           break
            
case 'ass':
         if (ass == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ass' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
             
case 'blowjob':
         if (blowjob == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let bj = await(await fetch(`https://api.waifu.pics/nsfw/blowjob`)).json()
          conn.sendButton(m.chat, tekk, fot, bj.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'cums':
         if (cums == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'cum' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ecchi':
         if (ecchi == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tade, fot, await(await fetch(res + 'ecchi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'ero':
         if (ero == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'ero' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erofeet':
         if (erofeet == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'feet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erogirl':
         if (erogirl == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'lewdanimegirls' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holoero':
         if (holoero == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'holo' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'erokitsune':
         if (erokitsune == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'erok' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroneko':
         if (eroneko == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'eron' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'eroyuri':
         if (eroyuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'eroYuri' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'feet':
         if (feet == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'feet' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'femdom':
         if (femdom == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'femdom' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'futanari':
         if (futanari == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'futanari' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'girlsolo':
         if (girlsolo == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'solo' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'hentai':
         if (hentai == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'hentai' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'holo':
         if (holo == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'hololewd' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kitsune':
         if (kitsune == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'kitsune' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'kuni':
         if (kuni == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(resl + 'kuni' + apil)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'loli':
         if (loli == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tade, fot, await(await fetch(res + 'loli' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'manga':
         if (manga == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'manga' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'milf':
         if (milf == true) { 
         if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tade, fot, await(await fetch(res + 'milf' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'mstrb':
         if (mstrb == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'mstrb' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'neko':
         if (neko == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'nsfwneko' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'oppai':
         if (oppai == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'sideoppai' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'panties':
         if (panties == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'panties' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'pussy':
         if (pussy == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'pussy' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'spank':
         if (spank == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'spank' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tentacles':
         if (tentacles == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'tentacles' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'tits':
         if (tits == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'tits' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'thighs':
         if (thighs == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'thighs' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'trap':
         if (trap == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let tr = await(await fetch(`https://api.waifu.pics/nsfw/trap`)).json()
          conn.sendButton(m.chat, tekk, fot, tr.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'uniform':
         if (uniform == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(xres + 'uniform' + xapi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'waifu':
         if (waifu == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          let wf = await(await fetch(`https://api.waifu.pics/nsfw/waifu`)).json()
          conn.sendButton(m.chat, tekk, fot, wf.url, [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yaoi':
         if (yuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tekk, fot, await(await fetch(res + 'yaoi' + api)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
case 'yuri':
         if (yuri == true) { 
	     if (db.data.users[m.sender].premiumTime < 1) return conn.sendButton(m.chat, txtprem, botdate, [['ʙᴜʏ ᴘʀᴇᴍɪᴜᴍ', '.premium'],['ᴏᴡɴᴇʀ', '.owner nomor']], m)
		 }
          conn.sendButton(m.chat, tade, fot, await(await fetch(hrk + 'yuri' + hrpi)).buffer(), [[next, `${usedPrefix}nsfw ${args[0]}`]],m)
            break
            
default:
         return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
        } else if (/hentong/i.test(command)) {
               const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
               switch (_type) {
           case 'A':
               break
           case '':
               break
default:
          return conn.sendButton( m.chat, caption, fot, null, [`⋮☰ Menu`, `.menu`], m)
         }
        }
       } catch (err) {
                      m.reply("Error\n\n\n" + err.stack)
      }
//-----------------------------

}

handler.help = ['nsfw <type>'']
handler.tags = ['nsfw', 'premium']
handler.command = /^(nsfw)/i

export default handler
