exports.run = (client,message,args) => {
  
  let piada1 = client.users.cache.get("637058891368235025").username
  
 /* let piada2 = client.users.cache.get("").username*/
  
  let array = [
    "Piada enviada por: " + piada1 + "\n Oque é um pino verde no meio do branco? \n \n um pingreen "
    ]
  
  let piada = array[Math.floor(Math.random() * array.length)]
  
  message.channel.send(piada)
  
}