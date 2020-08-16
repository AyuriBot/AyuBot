exports.run = (client,message,args) => {
	let user = message.mentions.users.first();
	let array = [
		"Por ter traumatismo coreano",
		"Por não ter te dado nitro mês passado",
		"Por não ajudar o servidor",
		"Por não ser humano",
		"Por ser grosso",
		"Por não gostar da Ayuri",
		"Por jogar Free Fire",
		"Por ser usuário de Tik Tok",
		"Por ser preguiçoso"
		];
		let cancel = array[Math.floor(Math.random() * array.length)]
		if(!user) return message.reply("Quem você deseja cancelar? MENCIONE ELA (ay.cancelar user)")
		message.channel.send(`<@${user.id}> Foi cancelado ${cancel}`)
}