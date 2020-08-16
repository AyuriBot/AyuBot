const Discord = require('discord.js')
const config = require('../config.json')
const db = require('quick.db')
module.exports.run =  (client, message, args) => {


let usermen = message.mentions.users.first() ||  message.users.cache.get(args[0]);
  
if (!usermen) return message.reply('isso não é um membro')
  
if (message.author === usermen) return message.reply('**vôce não pode doar para você mesmo**')
  
let money = db.get(`Money_${message.author.id}`)

 if (money < args[1]) return message.reply(`**você não possui <:nikkk:739995169671217203>${args[1]}**`) //caso apessoa não tenha a tal quantia ele será avisadk

db.add(`Money_${usermen.id}`, args[1])

db.subtract(`Money_${message.author.id}`, args[1])
//estará subtraindo o money de quem usou o comando

  const embed = new Discord.MessageEmbed()
  .setDescription(`**${message.author} doou  a quantia dé<:nikkk:739995169671217203>${args[1]} para o usuário ${usermen.username}**`)
   .setColor('RANDOM')
  message.channel.send(embed)
  
}