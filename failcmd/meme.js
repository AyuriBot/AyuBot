const Discord = require('discord.js')
exports.run = (client,message,args) => {
  if(message.author.id === "407859300527243275") {
    const attachmt = new Discord.MessageAttachment(args[0]);
    // Send the attachment in the message channel
    message.channel.send(attachmt);
    
    client.channels.cache.get("612429104825761812").send({files: [{attachment: args[0], name: "meme.png"}] })
    
  }
  else {
    message.channel.send("Você não tem permissão de usar")
  }
}