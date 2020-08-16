const Discord = require('discord.js')
const config = require('../config.json')
module.exports.run = (client, message, args) => {

let Args2 = args.slice(0).join('+').trim()
if(!Args2) return message.channel.send("ops! parece que você não digitou oque você que pesquisar!")

let embed = new Discord.MessageEmbed()
.setDescription(`**Seu link está aqui!** [clique aqui](https://m.youtube.com/results?search_query=${Args2})`)
.setFooter('Utilize o símbolo + para identificar "espaço"')
 
 message.channel.send(embed)
}