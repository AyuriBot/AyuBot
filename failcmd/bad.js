exports.run = (client,message,args) => {
    let member = message.mentions.members.first() || message.author;
    
    let link = "https://api.alexflipnote.dev/bad?image="
    
    let meme = link + client.users.cache.get(member.id).avatarURL({size: 2048})
    
    message.channel.send({files: [{attachment: meme, name: "bravo.png"}]})
}