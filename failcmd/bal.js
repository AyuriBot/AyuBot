const Discord = require('discord.js')
const config = require ('../config.json')
const db = require ('quick.db')
module.exports.run = (client, message, args) =>{



let userm = message.mentions.users.first() || message.author || message.users.cache.get(args[0]);

let money = db.get(`Money_${userm.id}`)
if(money === null) money = 0

const embed = new Discord.MessageEmbed()
 .setTitle('Banco 💴')
.setDescription(`**O usuário ${userm.username} contém a quantia de <:nikkk:739995169671217203>${money}**`)
.setColor('#87CEEB')



message.channel.send(embed)
}
