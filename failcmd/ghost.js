const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = (client, message, args) =>  {
  

let donos = ['729835592510079007', '407859300527243275']
if (!donos.includes(message.author.id)) return message.reply(`So o slow e o igor podem utilizar esse comando!`)
  
  
message.channel.send("Fui desligada com sucesso").then(() => {process.exit(1)})
  
}


