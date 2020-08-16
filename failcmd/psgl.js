const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = (client, message, args) => {

let Args2 = args.slice(0).join('+').trim()
if(!Args2) return message.channel.send("ops! parece que você não digitou oque você que pesquisar!")



let embed = new Discord.MessageEmbed()
.setTitle(`**Seu link google está aqui (<:emoji_1:739581935407595742>)
 **`) 
 .setDescription(`→[clique aqui](https://www.google.com/search?q=${Args2})`)
.setColor('RANDOM')
 
 message.channel.send(embed)
}