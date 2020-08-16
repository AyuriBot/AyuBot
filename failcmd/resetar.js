const Discord = require('discord.js')
const config = require ('../config.json')
const db = require ('quick.db')
module.exports.run = (client, message, args) =>{



let userm = message.mentions.users.first() || message.author || message.users.cache.get(args[0]);

let money = db.delete(`Money_${userm.id}`)


const embed = new Discord.MessageEmbed()
 .setTitle('Resetado...')
.setDescription(`**Seu money foi resetado com sucesso 💸**`)
.setColor('RANDOM')



message.channel.send(embed)
}
 