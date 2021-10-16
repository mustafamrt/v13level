
const {MessageEmbed, Permissions,MessageAttachment } = require('discord.js');
        const canvacord = require("canvacord");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        var user = message.mentions.users.first() || message.author;
        var id = user.id
        var gid = message.guild.id;
           console.log(xp)
        var lvl = await db.fetch(`lvl_${id}_${gid}`);
        var xp = await db.fetch(`xp_${id}_${gid}`);
        var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);
        let u = message.mentions.users.first() || message.author;
      if(u.bot === true) { message.channel.send({embeds: [new Discord.MessageEmbed()
      
                              .setDescription("Botların seviyesi bulunmamaktadır!")
                              .setColor("RANDOM") ]})}
      
         
        



let card = db.fetch(`card_${message.author.id}`)

    const rank = new canvacord.Rank()
    .setAvatar(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=2048`)
    .setCurrentXP(Number(xp))
    .setLevel(Number(lvl))
    .setRequiredXP(Number(xpToLvl))
    .setStatus("dnd")
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(message.author.tag)
    .setRankColor('transparent', 'transparent')
    .setBackground('IMAGE',`${card ? card : 'https://cdn.discordapp.com/attachments/882659273623089173/898929712821305396/20121011142542-29db96f4-me.png'}`)
    .setDiscriminator(message.author.discriminator);
  

rank.build()
    .then(data => {
        const attachment = new MessageAttachment(data, "RankCard.png");
        message.channel.send({content:`${message.author} isimli kişinin leveli`,files:[attachment]})



    })
   




 
        

},

name: "seviyem",
description: "",
aliases: [],
kategori: "",
usage: "",
}
