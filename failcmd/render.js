const web = require('screenshot-web');
const { MessageEmbed } = require('discord.js');

exports.run = async (client,message,args) => {
  
  if (!args.join(" ")) return message.channel.send("coloque uma url");
  

const browser = await web.launch();

const page = await browser.newPage();

await page.goto(args.join(" "));

await page.screenshot({ path: 'rendered.png' });

await browser.close();

const embed = new MessageEmbed()

.attachFiles(['rendered.png'])

.setImage('attachment://rendered.png')

.setColor("RANDOM");

message.channel.send(embed);

  }
