const Discord = require('discord.js')
exports.run = (client,message,args) => {
    let member = message.mentions.members.first() || message.author;
    
    let link = "https://api.alexflipnote.dev/facts?text="
    
    let meme = link + args.slice(0).join('%20')
    let erro = link + "Coloque%20algo%20aqui!"
    if(!args.slice(0).join('%20')) return message.channel.send({files: [{attachment: erro, name: "erro.png"}]});
    
    const embed = new Discord.MessageEmbed()
    .setTitle("FATO")
    .setDescription(args.slice(0).join(' '))
    .setImage(meme)
    .setColor("RANDOM")
    
    message.channel.send(embed).catch(err => {message.channel.send("Não foi possível enviar imagem! " + err)})
}