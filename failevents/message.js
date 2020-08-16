 const { prefix } = require("../config.json");
const cooldownMap = new Map();
const db = require("quick.db");
const Discord = require('discord.js')

let server = "658865841231757333"
module.exports = (client, message) => {
  if(message.channel.id === server) {
  	client.channels.cache.get("720765336399642796").send(message.content + " / " + message.author.id+ "\n" + message.author.username)
  }
  if (message.author.bot) return;
  if(message.channel.type == "dm") return client.channels.cache.get("704313434367459359").send(`Usuário dm: ${message.author.id} disse: ${message.content}`); //não reponde dm
 // let user = db.fetch(`failon_${message.author.id}`);
  //if(user == true) return;
  /*if (
    message.content === "Oi" ||
    message.content === "oi" ||
    message.content === "OI"
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
      message.channel.send("Oi!");
    }, 1000);l
  }*/

  if(message.channel.id === "720765336399642796") {
  	client.channels.cache.get(server).send(message.content)
  }
  

  if(message.content === "creeper") {
  	message.channel.send("Awwn Man!")
  	message.react("741521168879583292")
  }
  
  if(message.channel.id === "742887453492510740") {
  	db.set(`avisos`, message.content)
  }
  
  client.on("typingStart", channel => {
  	if(channel.id === "720765336399642796") {
  		client.channels.cache.get(server).startTyping(2)
  	}
  }) 
    client.on("typingStop", channel => {
  	if(channel.id === "720765336399642796") {
  		channel.stopTyping(2)
  	}
  })
  if(message.channel.id === "720742458299908177") {
  	client.channels.cache.get("571815024754950166").send(message.content)
  	client.channels.cache.get("612429104825761812").send(message.content)
  	client.channels.cache.get("720742377395847401").send(message.content)
  }
  let igor = client.users.cache.get("407859300527243275").username
  let sky = client.users.cache.get("669555350818652189").username
  let kama = client.users.cache.get("729835592510079007").username
  if(message.content === `<@699016235228201010>`) {
    let mentionembed = new Discord.MessageEmbed()
    .setTitle("👋 Olá sou Ayuri")
    .setColor("RANDOM")
    .setDescription(`Olá ${message.author.tag} Sou Ayuri, prazer conhecer veja minhas informações abaixo`)
    .addField("Eu fui criada em:", "2020")
    .addField("Hoje em dia estou sendo desenvolvida em:", "Javascript")
    .addField(`Meus criadores:`, igor + " , " + sky  +kama)
    .addField("Meu prefix neste server:", prefix)
    .addField("Meu servidor de suporte:", `[Link](https://discord.gg/sCZeWQE)`)
    message.channel.send(mentionembed)

  }
  if (message.content.indexOf(prefix) !== 0) return;


  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);
// ASSUMPTIONS:
// message is the message that triggered the command
// the channel of the invite will be the channel where the message has been sent


// ASSUMPTIONS:
// message is the message that triggered the command
// the channel of the invite will be the channel wh
 /* let invite = message.channel.createInvite(
  {
    maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
    maxUses: 1 // maximum times it can be used
  })
  */
  if (!cmd) return message.channel.send("**Não econtrei esse comando,use ay.ajuda e veja os meus comandos!**");
  if(message.author.bot) return message.channel.send("**Não econtrei esse comando,use ay.ajuda e veja os meus comandos!**");
  
  let user = db.fetch(`failon_${message.author.id}`);
  if(user == true) return message.channel.send("Você está proíbido de usar meus comandos");
  
  client.channels.cache.get("704313434367459359").send(`${message.author.tag} usou o comando: ${command}`)
  cmd.run(client,message,args)
//message.channel.send("Estou sendo iniciado pfv aguarde ...")
/*if(message.author.id === "407859300527243275") {
    cmd.run(client, message, args)
 } else {
   let tempo = 5 + " Horas"
   message.channel.send("Olá meu amigo <3, estou em manutenção... Tempo restante: " + tempo/*, {file: "https://media.tenor.com/images/3eb39fb698fada2b160bdb7df1bbdc81/tenor.gif"})}*/
    /*.catch(err => {
    message.channel.send(`Não foi possível executar comando: ${err}`)
  });*/
};