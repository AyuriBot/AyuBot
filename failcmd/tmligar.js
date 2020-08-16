const {MessageEmbed} = require('discord.js')
exports.run = (client,message,args) =>{
  if(!args[0]) return message.reply("**Digite algo**");
  let meme = "https://api.alexflipnote.dev/calling?text=" + args.slice(0).join('%20')
  const embed = new MessageEmbed()
  .setImage(meme)
message.channel.send(embed)
}