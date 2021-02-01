const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  let fadeaway = ("k!")
  
const yardım = new Discord.MessageEmbed()
.setAuthor(`ISTEDIGINIZ BIR YAZI`, message.author.avatarURL(({ format: 'png', dynamic: true, size: 1024 })))
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
.setThumbnail("https://cdn.discordapp.com/attachments/785821149580754954/786124655085748264/766653460988428308.gif")
.setColor("RANDOM")
.setImage("https://media.discordapp.net/attachments/801563495056670720/804771577577078814/standard.gif")
.setDescription(`Komutlarım;
\`${fadeaway}\`**yardım** : Botun Komutlarını Gösterir.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama
\`${fadeaway}\`**komut**: Açıklama
\`${fadeaway}\`**komut**: Açıklama
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.
\`${fadeaway}\`**komut**: Açıklama.`)
message.channel.send(yardım)

  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım',],
  permLevel: 0
};

exports.help = {
  name: 'deneme',
  description: 'k!yardım',
  usage: 'k!yardım'
}; 