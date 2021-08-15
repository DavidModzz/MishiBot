const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const prefix = '/'
const Cfonts = require('cfonts')
async function iniciar () { 
        const client = new WAConnection()
        
        client.logger.level = 'warn'
Cfonts.say('MishiBot'), {
colors: ['#ff0000'],
font: 'block',
aling: 'center', //'center'
}

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Mishi.json') && client.loadAuthInfo('./Mishi.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Mishi.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (sam) => {
try {	  
if (!sam.hasNewMessage) return
if (!sam.messages) return
if (sam.key && sam.key.remoteJid == 'status@broadcast') return

sam = sam.messages.all()[0]
if (!sam.message) return
global.blocked
sam.message = (Object.keys(sam.message)[0] === 'ephemeralMessage') ? sam.message.ephemeralMessage.message : sam.message
const from = sam.key.remoteJid
const type = Object.keys(sam.message)[0]        
const quoted = type == 'extendedTextMessage' && sam.message.extendedTextMessage.contextInfo != null ? sam.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(sam.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = sam.message.conversation || sam.message[type].caption || sam.message[type].text || ""
chats = (type === 'conversation') ? sam.message.conversation : (type === 'extendedTextMessage') ? sam.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && sam.message.conversation.startsWith(prefix)) ? sam.message.conversation : (type == 'imageMessage') && sam.message.imageMessage.caption.startsWith(prefix) ? sam.message.imageMessage.caption : (type == 'videoMessage') && sam.message.videoMessage.caption.startsWith(prefix) ? sam.message.videoMessage.caption : (type == 'extendedTextMessage') && sam.message.extendedTextMessage.text.startsWith(prefix) ? sam.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
        
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['595994966449@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const sender = sam.key.fromMe ? client.user.jid : isGroup ? sam.participant : sam.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = sam.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = sam.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

if (budy== 'Reglas'){
client.sendMessage(from, fs.readFileSync('./Media/reglas.mp3'), MessageType.audio, {quoted : sam})
reply('Sigue las reglas, negro puto, pinche fri fai qliao')}

switch (command) {

case 'bot':
client.sendMessage(from, '*Hola hermosa* * *Se acerca y le insemina el óvulo* *', text, {quoted : sam})
break
 
case 'sticker':
        case 'stiker':
        case 's':
      if (isMedia && !sam.message.videoMessage || isQuotedImage) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
			const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
			await ffmpeg(`${media}`)
			.input(media)
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			reply('error')
		    })
			.on('end', function () {
			console.log('Finish')
			exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			if (error) return reply('error')
			client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: sam, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
			fs.unlinkSync(media)	
			fs.unlinkSync(`./sticker/${sender}.webp`)	
			})
			})
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(`./sticker/${sender}.webp`)
			} else if ((isMedia && sam.message.videoMessage.fileLength < 10000000 || isQuotedVideo && sam.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
			const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(sam).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : sam
			const media = await client.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
			client.sendMessage(from, `*Por favor, espera...* ^^`, MessageType.text, {quoted: sam, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
			await ffmpeg(`${media}`)
			.inputFormat(media.split('.')[4])
			.on('start', function (cmd) {
			console.log(`Started : ${cmd}`)
			})
			.on('error', function (err) {
			console.log(`Error : ${err}`)
			fs.unlinkSync(media)
			tipe = media.endsWith('.mp4') ? 'video' : 'gif'
			})
			.on('end', function () {
			console.log('Finish')
			exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
			client.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: sam, sendEphemeral: true, contextInfo: {"forwardingScore": 9999, "isForwarded": true}})
			fs.unlinkSync(media)
			fs.unlinkSync(`./sticker/${sender}.webp`)
			})
			})
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(`./sticker/${sender}.webp`)
	      	} else {
			reply('menciona un sticker')
			}
        break

case 'Hola':
client.sendMessage(from, '*Hola puta*', text, {quoted : sam})
break

case 'gay':
client.sendMessage(from, '*Tu viejo*', text, {quoted : sam})
break

case ':v':
client.sendMessage(from, '*como que :v negro de mierda* 😡🤬', text, {quoted : sam})
break

case 'sexo':
client.sendMessage(from, 'wa.me/595985865771 *El cobra 1$ la hora*', text, {quoted : sam})
break
                  
case 'Negro':
client.sendMessage(from, '*Oe acá no discriminamos 😡🤬(a menos que seas jugador de fri fayer)*', text, {quoted : sam})
break

case 'reglas':
let Fisher = fs.readFileSync('./mp3/Rules.mp3')
client.sendMessage(from, Fisher, MessageType.audio, {quoted : sam})
break

}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
