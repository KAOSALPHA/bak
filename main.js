const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix+'prefix') {
    msg.chanel.send('k!');
  }
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam Hoş Geldin');
  }
});

client.login('Nzk5OTM2MzQzMTc3MTY2ODQ4.YAK0xg.BSDJDeG8c6AihHSAdSRaYyFkJYo');