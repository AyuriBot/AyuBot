const Discord = require('discord.js')
exports.run = (client,message,args) => {
let user = message.mentions.users.first() || message.author;
const embed = new Discord.MessageEmbed()
.setTitle(`Avatar de: ${user.username}`)
  .setColor("#87CEEB")
  .setImage(user.displayAvatarURL())
message.channel.send(`Avatar de **${user.tag}**`, {files: [{attachment: user.displayAvatarURL(), name: "avatar.jpg"}]})
}