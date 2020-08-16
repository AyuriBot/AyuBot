const Discord = require('discord.js');
const config = require('../config.json');
const db = require('quick.db');
module.exports.run = (client, message, args) => {     
  
  let usermen = message.mentions.users.first() ||  message.guild.members.cache.get(args[0]) || message.author;
	let val = db.get(`repvr_${usermen}`);
	if (val === null) {
	val = 0
	}
	db.add(`repvr_${usermen}_${usermen}`, 0);
	const embed = new Discord.MessageEmbed()
		.setTitle('Reputaç~ees 😁👌')
		.setDescription(`**${usermen} contém ${val} reputações** `)
		.setColor('RANDOM')
	message.channel.send(embed);
}; 
