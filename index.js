const db = require('quick.db')
const express  = require('express');
const talkedRecently = new Set();

const session  = require('express-session');

const app = express();

const passport = require('passport');

const Strategy = require('./lib/strategy.js').Strategy;

const { checkAuth } = require('./utils/checkAuth.js');
const Discord = require('discord.js')
const client = new Discord.Client({ 
  ws : { 
    properties : { 
      $browser : "Discord Android"  // <- um valor popular para alterar $ browser para 
    } 
  } 
});

app.use(session({

    secret: 'youshallnotpass',

    resave: false,

    saveUninitialized: false

}));

passport.serializeUser(function(user, done) {

  done(null, user);

});

passport.deserializeUser(function(obj, done) {

  done(null, obj);

});

const scopes = ['identify', 'email', 'guilds'];

passport.use(new Strategy({

    clientID: process.env.id,

    clientSecret: process.env.secret,

    callbackURL: 'https://ayuri.nerdvsvs.repl.co/callback',

    scope: scopes

}, function(accessToken, refreshToken, profile, done) {

    process.nextTick(function() {

        return done(null, profile);

    });

}));

app.use(passport.initialize());

app.use(passport.session())

app.get('/login', passport.authenticate('discord', { scope: scopes }), function(req, res) {});

app.get('/callback', passport.authenticate('discord', { failureRedirect: '/callback' }), function(req, res) { res.redirect('/') });

app.get('/logout', function(req, res) {

    req.logout();

    res.redirect('/');

});

app.get('/info', checkAuth, function(req, res) {

    //console.log(req.user)

    res.json(req.user);

});
let array = [
	100,
	300,
	500,
	1000
	]
	let mon = array[Math.floor(Math.random() *array.length)]
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebipipiping.getUTCMinutes()}:${ping.getUTCSeconds()}`);

  response.render("index.ejs", {
logged: request.isAuthenticated(),
  	avatar: request.user ? `https://cdn.discordapp.com/avatars/${request.user.id}/${request.user.avatar}.png?size:2048` : "",
  	name: request.user ? request.user.username: "",
  	ganh: request.user? db.fetch(`Money_${request.user.id}`): "",
  	site: db.fetch(`avisos`)
  })
})
app.get("/daily", checkAuth, function(req,res) {
	if (talkedRecently.has(req.user.id))
  return console.log("A") //client.users.cache.get(req.user.id).send(`**Ops! você precisa esperar 12h para resgatar seu daily**`)
 // .then(msg => {
    //msg.delete({timeout : 10700})
// })

talkedRecently.add(req.user.id);
setTimeout(() => {
  talkedRecently.delete(req.user.id);
}, 436000000);

  db.add(`Money_${req.user.id}`, mon)
res.sendFile(__dirname + "/views/daily.ejs")
	
		res.redirect("/")

})
app.listen(3000, function (err) {
   console.log("Listening on: 3000");
})
//const Discord = require('discord.js');
const Enmap = require("enmap");
const fs = require("fs");
//const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
const DBL = require("dblapi.js");
 
const http = require("http");

//const db = require('quick.db')



/*
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = `Discord iOS`*/

//const Discord = require("discord.js");
//const client = new Discord.Client();


fs.readdir("./failevents/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./failevents/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client))
  })
})
client.commands = new Enmap();

fs.readdir("./failcmd/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./failcmd/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    client.commands.set(commandName, props);
  });
});

//});

client.login(process.env.token)
