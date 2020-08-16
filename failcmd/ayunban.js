const db = require("quick.db");
const config = require("../config.json");

exports.run = (client, message, args) => {
  if(message.author.id == "407859300527243275" || message.author.id == '520434763673108500' || message.author.id == '530819970624520225') {
    let user = client.users.cache.get(args[0])
  
    if(!user) return message.channel.send(`Não encontrei o usuário...`);
     
    let fetched = db.fetch(`failon_${user.id}`)
    
    if(!fetched) {      
     return message.channel.send(`Ja estava desbloqueado`);
     /* client.channels.get('705620889206652968').send(`O nosso "amigo" ${user.username} Foi proíbido de usar meus comandos :(
Motivo: ${args.slice(1).join('  ')}
Quem puniu: ${message.author.tag}`)*/
    }else{ // Se já estiver bloqueado
            db.delete(`failon_${user.id}`)
 message.channel.send(`Desbloqueado`);
    }
  }else{ // Se não tiver permissão
    return message.reply(`Chequei seu id, e você não é meu desenvolvedor`)
  }
}

exports.help = {
  name: "blacklist"
}


