exports.run = (client,message,args) => {
  let array = [
    "Sim",
    "Não",
    "Não sei...",
    "Não sabia",
    "provavelmente sim!",
  ];
  let per = array[Math.floor(Math.random() *array.length)];
  
  //let w = message.channel
 message.channel.createWebhook("CJ", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtPoRklQP-Ztm3RrLROye4XPobdZfepugZtJbQ6BtqmOpySf3k&usqp=CAU").then(w => {
    w.send(`${per}`)
    w.delete()
})
}
