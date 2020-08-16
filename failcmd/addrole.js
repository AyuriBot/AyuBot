const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = (client, message, args) => {
  
  let usermen = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
  
  
  let cargo = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name === args.slice(1).join(" ") || a.id === args[1])
  
  usermen.roles.add(cargo.id)
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`**O cargo (${cargo}) foi adicionado ao usuário ${usermen}**`)
  .setColor('RANDOM')
  // vou testar agora
  
  message.channel.send(embed)
}