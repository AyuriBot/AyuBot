const Discord = require('discord.js')
const config = require('../config.json')
const db = require("quick.db") 
  
module.exports.run = (client, message, args) => {

  
const canal = message.mentions.channels.first()
  
db.set(`canal_${message.guild.id}`, canal.id)

}