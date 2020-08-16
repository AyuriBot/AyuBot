const moment = require("moment");
require("moment-duration-format");

exports.run = (client,message,args) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

console.log(duration);

  message.channel.send(duration)
  client.channels.cache.get("725482856561770607").send(duration)
}