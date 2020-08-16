const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = (client, message, args) =>{
  
 
  
let menb = message.mentions.members.first()

if(!menb){
message.channel.send('sem membro para banir')
}

let Args2 = args.slice(0).join(' ').trim()
if(!Args2) return message.channel.send("Digite um motivo para o banimento!")


menb.ban()
  
  const embed = new Discord.MessageEmbed()
  
  .setTitle('Banido👌')
  .setDescription(`O usuario ${menb} foi banido por ${message.author} 
    Motivo: Args2`)
    message.channel.send(embed)
}