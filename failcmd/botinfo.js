const Discord = require('discord.js')
const client = new Discord.Client()
const embed = new Discord.MessageEmbed()
.setTitle("⭐ - Informações")
.setColor('#87CEEB')
.setDescription("Olá sou Ayuri, sou uma bot feita em JavaScript com intuito de proteger, divertir e entreter o servidor, aqui está meu [Convite]()")
.addField("Meus criadores:", "SkyGlis, Igor, Kamakatsu")
.addField("Programadores:", "Slot")

.addField("Sou feita no:", "repl.it")
.addField("Meu prefixo:", "ay.")



exports.run = (client,message,args) => {
  
  embed.addField("Ping:", client.ws.ping)
  
  message.channel.send(embed)
}