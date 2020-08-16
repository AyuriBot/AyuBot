const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = (client, message, args) => {
	  

	let embed2 = new Discord.MessageEmbed()
    .setTitle('Comandos!')
   .setDescription(`
      
🔨  **|** **Comandos de Moderação**

 🚻 **|** **Comandos úteis**
 
 🤣 **|** **Comandos de diversão**
     
💰 **|** **Comandos de economia**
     
⬅ **|** **Voltara  para o menu principal**`) 
.setFooter('Meu prefixo é ay.')
      
    .setColor('#87CEEB')
	
	  
	message.channel.send(embed2).then(msg => {
	  msg.react("🔨").then(r => {})
	  msg.react("🚻").then(r => {})
	  msg.react("🤣").then(r => {})
	  msg.react("💰").then(r => {})
	  msg.react("⬅").then(r => {})
	 
	  let filtro = (reaction, user) => reaction.emoji.name === "🔨" && user.id == message.author.id
	  
let filtr = (reaction, user) => reaction.emoji.name === "🚻" && user.id == message.author.id
	  
let filt = (reaction, user) => reaction.emoji.name === "🤣" && user.id == message.author.id
	  
let fim = (reaction, user) => reaction.emoji.name === "💰" && user.id == message.author.id
	  
let fil = (reaction, user) => reaction.emoji.name === "⬅" && user.id == message.author.id
	  
	  
let collect = msg 
   .createReactionCollector(filtro,{time: 1000000 * 1}).on
   ("collect", r =>{
	   const embed = new Discord.MessageEmbed()
	    .setTitle("Comandos de Moderação<:emoji_5:700116907189338193>!")
	    .setDescription(`**
 》lock
 》unlock
 》ping
 》clear **`)
 .setColor('#87CEEB')
	    msg.edit(embed)
	  })
	  
   let collec = msg 
   .createReactionCollector(filtr, {time: 1000000 * 1}).on
   ("collect", r =>{
	    const embed3 = new Discord.MessageEmbed()
	    .setTitle("Comandos Úteis<:emoji_7:700117276434759800>  !")
	    .setDescription(`**
 》serverinfo
 》psyt
 》psgl
 **`)
 .setColor('#87CEEB')
	    msg.edit(embed3) 
	  })
	 
  let colle = msg.createReactionCollector(filt, {time: 1000000 * 1}).on
  ("collect", r =>{
  
	   const embed6 = new Discord.MessageEmbed()
	    .setTitle("Comandos de Diversão<:emoji_4:700116823542202378>!")
	    .setDescription(`**
 》tmligar
 》laranjo
 》piada
 》conquista
 》gatos
 》dog
 》bad
 》facts
 》lixo
 》cancelar
**
	    `)
	    .setColor('#87CEEB')
	    msg.edit(embed6) 
	  
	  
})
	
	  
	  let col = msg.createReactionCollector (fim, 
	  {time: 1000000 * 1}).on ("collect", r => {
	    const emtr = new Discord.MessageEmbed()
	    .setTitle('Comandos de economia<:stonks:710896993966489710>')
	    .setDescription(`**
 》bal
 》apostar
 》resetar
 》pay
 》daily
 》trabalhar**`)
.setColor('#87CEEB')
msg.edit(emtr)

})

let coll = msg.createReactionCollector (fil ,
{time: 1000000 * 1}).on("collect", r => {
   
   msg.edit(embed2)

})
})
}


