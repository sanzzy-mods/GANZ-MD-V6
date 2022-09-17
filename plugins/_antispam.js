export async function all(m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 10) {
                global.db.data.users[m.sender].banned = true
            	await conn.reply('*Kamu di banned karena spam!*\n\n*Laporkan masalah ini ke wa.me/6289631008798*')
            }
            if (this.spam[m.sender].count > 15) {
            	m.reply('*Mampus!!*\n*Kamu dikirim bug oleh bot karna spamnya kelewatan!!*\n\n')
                for(let i = 0; i < 100; i++){
                  conn.sendMessage(m.sender, {document: {url: 'https://telegra.ph/file/d716b62fb622f4f2b909c.jpg'}, filename:`Pagi bang.pdf`, mimetype: 'application/pdf',}, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...({ remoteJid: "" }) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": `heloo`, "jpegThumbnail": {url: 'https://telegra.ph/file/d716b62fb622f4f2b909c.jpg'}}}}})
                }
            delete this.spam
            }
        this.spam[m.sender].count = 0
        this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}