const Discord = require('discord.js');
const config = require('../config.json');
const moment = require('moment');
moment.locale('pt-br');

module.exports.run = (client, message, args) => {
  
  
  let nome = message.guild.name
  
let on = message.guild.members.cache.filter(a => a.presence.status == "online").size;

let oc = message.guild.members.cache.filter(a => a.presence.status == "dnd").size;

let idle = message.guild.members.cache.filter(a => a.presence.status == "idle").size;

let off = message.guild.members.cache.filter(a => a.presence.status == "offline").size;

let live = message.guild.members.cache.filter(a => a.presence.status == "steam").size;

let channel = message.guild.channels.cache.size;

let bot = message.guild.members.cache.filter(a => a.user.bot).size



let total = message.guild.members.cache.size;

// Status: Online = online, ocupado = dnd, ausente = idle, offline = offline, transmitindo = steam


  let id = message.guild.id;
  
  let cr = moment(message.guild.createdAt).format('LL');

  let embed = new Discord.MessageEmbed()
  
  .setDescription(`
  
   *Nome do servidor*
 ➭**${nome}** 
   
  *ID do servidor*
 ➭**${id}**
   
   *Servidor criado em:*
 ➭**${cr}**
   
   *Total de canais*
 ➭**${channel}**
   
    *Total de Membros*
 ➭ **${total}**
   
   *Status dos membros*
   **<:emoji_14:724582017769144341>Online:** **${on}**
   **<:emoji_17:724582154771759197>Ocupado:** **${oc}**
   **<:emoji_16:724582134056222740>Ausentes:** **${idle}**
   **<:emoji_15:724582058462281788>Offline:** **${off}**
   **<:emoji_16:724582085653954640>Transmitindo:** **${live}**
   **<:emoji_19:724667764329152584>Bots:** **${bot}**
   
   *Shard ID*
   **${message.guild.shardID}**
   
  
   
   `)
   
   .setColor('WHITE')
   
.setThumbnail(message.guild.iconURL())
  
  message.channel.send(embed)
}

