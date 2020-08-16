const Discord = require('discord.js')
const config = require('../config.json')
const db = require('quick.db')
module.exports.run = (client, message, args ) => {
  
let usermen = message.mentions.users.first() ||  message.guild.members.cache.get(args[0]); 
  
 if(!usermen) return message.reply('Voce não pode dar rep em você mesmo')
  
  let val = db.get(`repvr_${usermen}`)
  
db.add(`repvr_${usermen}`, 1)
  
  const embed = new Discord.MessageEmbed()
  .setTitle('Reputação concluída 💫')
  .setDescription(`**${usermen} você recebeu uma reputação de  ${message.author} agora você contém ${val} reputações 😁**`)
  .setColor('RANDOM')
  
  const embed2 = new Discord.MessageEmbed()
   .setTitle('Presetinho 🎁')
  .setDescription(`**Minha nossa paresse que um usuário le deu uma reputação 👌 e o nome dele é ${message.author}, agradeça ele(a) 😁**`)
  .setColor('RANDOM')
  usermen.send(embed2)
  message.channel.send(embed)
}

