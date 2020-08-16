const Discord = require('discord.js')
 const snekfetch = require('snekfetch');
 const moment = require("moment");
require("moment-duration-format");

module.exports = (client) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

  console.error("estou online :)")
  let svs = client.guilds.cache.size;
  let status = [
  	`Estou em: ${svs} Servidores`,
  	`Use ay.ajuda para ver meus comandos`,
  	`Sou feita em: Discord.js`
  
  	]
  let randomStatus = status[Math.floor(Math.random() * status.length)]
  setInterval(() => {
  client.user.setActivity(randomStatus)
  }, 12000)
  //client.user.setStatus("dnd")x
}