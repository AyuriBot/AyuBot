exports.run = (client,message,args) => {
  let ping = Date.now() - message.createdAt
  let api = client.ws.ping
  
  message.channel.send(`Bot: ${ping} MS
  Api: ${api} MS`)


}