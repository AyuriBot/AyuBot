const Discord = require('discord.js');

exports.run = (client,message,args) => {
	let user = message.mentions.users.first();
	if(!user) return message.channel.send("Mencione o usuário");
	let id = client.users.cache.get(user.id).avatarURL({size: 2048})
	let avatar = message.author.avatarURL({size: 2048})
	let link = `https://api.alexflipnote.dev//trash?face=${avatar}&trash=${id}`
	
	const embed = new Discord.MessageEmbed()
	.setTitle("Lixo no lixo!")
	.setDescription("Está é sua casa")
	.setImage(link)
	.setColor("RANDOM");
	message.channel.send(embed)
	

}