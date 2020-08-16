const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
	try {
    
    let array = ["MemesBrasil"]
    let reddit = array[Math.floor(Math.random() * array.length)]
    
        const { body } = await snekfetch
        
            .get('https://www.reddit.com/r/' + reddit + '.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Postado por: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("Other info:", "likes: " + allowed[randomnumber].data.ups + " / comentarios: " + allowed[randomnumber].data.num_comments)
        .setFooter("os memes são coletados do reddit do " + reddit)
     //   client.channels.get("664503726957920276").send(embed)            
    client.channels.cache.get("664503726957920276").send(embed)
    message.channel.
    send(embed)
    } catch (err) {
        return console.log(err);
    }
}