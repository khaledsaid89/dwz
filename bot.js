const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603601692507897860")
setInterval(function() {
channel.send(`gamd fs5`);
}, 30)
})

client.login(process.env.BOT_TOKEN);