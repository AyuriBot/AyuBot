const Discord = require('discord.js');

exports.run = (client,message,args) => {
	if(message.author.id ==="") {
		const input = args.join(" ")

try {
	const output = eval(input)

	if(typeof output !== "string") output = inspect(output)
	if(output.length > 1950) output = output.substr(0, 1950);
	message.channel.send(`Saida:**\n\`\`\`js\n${output}\n\`\`\``)
} catch (error) {
	message.channel.send(`**Error:**\n\`${error}\``)
}

	}
}