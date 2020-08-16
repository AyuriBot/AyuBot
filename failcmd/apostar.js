const Discord = require('discord.js')
const config = require('../config.json')
const db = require('quick.db')
module.exports.run =  (client, message, args) => {


 let usermen = message.mentions.users.first() ||  message.guild.members.cache.get(args[0]);
if (!usermen) return message.reply('isso não é um membro');

const embed = new Discord.MessageEmbed()
.setDescription(`**${usermen} o usuário ${message.author} que fazer uma aposta com você de <:nikkk:739995169671217203>${args[1]}, se você aceitar a aposta clique na reação(💸) para confirmar a aposta** `)
   .setColor('#87CEEB')
message.channel.send(embed).then(msg => {
	  msg.react("💸").then(r => {})

const filter = (reaction, user) => reaction.emoji.name === '💸' && user.id === usermen.id;

msg.createReactionCollector(filter, { time: 1000000 * 1 }).on('collect', (r) => { 

const jogadores = [message.author, usermen];
const escolhido = jogadores[Math.floor(Math.random() * jogadores.length)];

if (message.author === usermen) return message.reply('**vôce não pode apostar com você mesmo**')



let money = db.get(`Money_${message.author.id}`)
if (money < args[1]) return message.reply(`**você não possui ¥${args[1]}**`) //caso apessoa não tenha a tal quantia ele será avisadk

let money2 = db.get(`Money_${usermen.id}`)
if (money2 < args[1]) return message.channel.send(`**${usermen.username} não possui ¥${args[1]}**`)



db.add(`Money_${escolhido.id}`, args[1]);

const perdedor = jogadores.filter(jogador => jogador.id != escolhido.id);
db.subtract(`Money_${perdedor[0].id}`, args[1]);
//estará subtraindo o money de quem usou o comando

	  

  const embed = new Discord.MessageEmbed()
  .setDescription(`**${escolhido} Parabéns você ganhou ¥${args[1]} 🎉**`)
   .setColor('#87CEEB')
  
  msg.edit(embed)
})
})}