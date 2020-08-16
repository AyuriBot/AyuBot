const Discord = require('discord.js')
const config = require('../config.json')
const db = require('quick.db')
const talkedRecently = new Set();
module.exports.run = async (client, message, args) => {
  
if (talkedRecently.has(message.author.id))
  return message.reply(`**Você precisa esperar 1h para trabalhar novamente!**`)
  .then(msg => {
    msg.delete({timeout : 10700})
  })

talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
},36e+6);
  
let aa = [
"bombeiro","medico","engenheiro",
"engenheiro","Cozinheiro","Enfermeiro","Dentista"]

let alt = aa[Math.floor(Math.random() * aa.length)]

let gaz = [
"3h","4h","5h",
"6h","7h"]

  
let si = gaz[Math.floor(Math.random() * gaz.length)]

  
const mon = Math.floor(Math.random() * 3000) +1;

db.add(`Money_${message.author.id}`, mon)
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Trabalhar 👷')
  .setDescription(`**${message.author} Você trabalhou como ${alt} por ${si} e ganho
  <:nikkk:739995169671217203>${mon}**`)
  .setColor('RANDOM')
  
message.channel.send(embed)  
}