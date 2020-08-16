const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = async (client, message, args) => {

let usermen = message.mentions.members.first() ||  message.guild.members.cache.get(args[0])|| message.member

if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(':x: Você não tem permissão de MANAGE_GUILD!'); //PESSOA
        if (!message.guild.member(client.user.id).hasPermission('MANAGE_GUILD')) return message.reply(':x: Não tenho a permissão de MANAGE_GUILD');//BOT

  
message.guild.fetchInvites()
.then(async invites => {
const userInvites = invites.array().filter(o => o.inviter.id === usermen.id);


let userInviteCount = 0;

for(var i=0; i < userInvites.length; i++) {
                        
 var invite = userInvites[i];
           userInviteCount += invite['uses'];

}

const embed = new Discord.MessageEmbed()
.setTitle('Invites 📩')
.setDescription(`**${usermen}  contém  ${userInviteCount} Invites no servidor ${message.guild}**`)
.setColor('RANDOM')

message.channel.send(embed);

})
  
}