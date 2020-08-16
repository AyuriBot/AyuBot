const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = (client, message, args) => {

let usermt = message.mentions.users.first()

let ment = message.author

if(message.author.id === usermt.id) return message.reply('Você não pode dar rep em você mesmo!');

   let embed = new Discord.MessageEmbed()
   .setDescription(`
   ${usermt} você recebeu uma reputação de ${ment}`)
   .setColo('RANDOM')
   
   message.channel.send('reputação enviada com sucesso!!')
   usermt.send(embed)
}