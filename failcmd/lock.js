const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = (client, message, args) => {
if(message.member.hasPermission("MANAGE_CHANNELS")) {
let guild = message.channel.id
let everyone = message.guild.roles.cache.find(a => a.name === "@everyone")

message.channel.overwritePermissions([
  {
     id: everyone.id,
      deny: ['SEND_MESSAGES'],
  },
]);
  
  let embed = new Discord.MessageEmbed()
  .setDescription(`<:emoji_5:700116907189338193> **|** **O canal  <#${guild}> foi bloqueado com sucesso**`)
  .setColor('#87CEEB')
  
  message.channel.send(embed)
  

}
}

