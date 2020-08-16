const Discord = require('discord.js')
const config = require('../config.json')
const db = require('quick.db')
module.exports.run = (client, message, args) => {
  
  

db.add(`repvr_${message.author.id}_${message.guild.id}`, 1)
  
  
  
}