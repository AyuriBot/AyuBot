const Discord = require('discord.js')
const config = require ('../config.json')
const talkedRecently = new Set();

const db = require ('quick.db')
module.exports.run = (client, message, args) =>{
  

if (talkedRecently.has(message.author.id))
  return message.reply(`**Ops! você precisa esperar 12h para resgatar seu daily**`)
  .then(msg => {
    msg.delete({timeout : 10700})
  })

talkedRecently.add(message.author.id);
setTimeout(() => {
  talkedRecently.delete(message.author.id);
}, 436000000);




const mon = Math.floor(Math.random() * 10000) +1;

db.add(`Money_${message.author.id}`, mon)



let money = db.get(`Money_${message.author.id}`)
if(money === null){
money = mon
}

const embed = new Discord.MessageEmbed()
.setTitle('Daily👌')
.setDescription(`**Você pegou seu daily diário
agora você contém <:nikkk:739995169671217203>${money}**`)
.setColor('#87CEEB')
.setThumbnail("https://cdn.discordapp.com/attachments/712853325132988436/739975842788147200/1596494366606.png")
message.reply(embed)
//message.channel.send(`Pegue seu daily! https://ayuri.nerdvsvs.repl.co/`)

}
