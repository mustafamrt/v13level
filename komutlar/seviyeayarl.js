const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


        if(!args[0]) {
   

            let kanal = await db.fetch(`seviyekanal${message.guild.id}`)
        
            let xp = await db.fetch(`seviyexp${message.guild.id}`)
            
            let sınır = await db.fetch(`seviyesınır${message.guild.id}`)
            
            let kanal1 = [];
            
              if(kanal) kanal1 = ` **Açık!**`
            
              if(!kanal) kanal1 = ` **Kapalı!**`
            
              let xp1 = [];
            
              if(xp) xp1 = ` \`${xp}\``
            
              if(!xp) xp1 = ` **Ayarlanmamış! Default: \`250\`**`
            
            let sınır1 = [];
            
              if(sınır) sınır1 = ` \`${sınır}\``
            
              if(!sınır) sınır1 = ` **Ayarlanmamış! Default: \`5\`**`
        
            const NARCOSEMBED = new Discord.MessageEmbed()
            .setAuthor("Seviye || Yardım Menüsü", client.user.avatarURL())
           .setColor("#BLUE")
          .setDescription(`<:saret:823577810382618655> **| NarcosCode Altyapı - Made By MustafaMert & Croxy**
        
          <:kurallar:823577810488393738> Yetkili Komutları:
          
        > <:uye:823577810383667200> **| \`Seviye Log Kanalı:\` ${kanal1} Olarak Gözüküyor.**
        > <:uye:823577810383667200> **| \`Mesaj Başına Gelen XP:\` ${xp1} Olarak Gözüküyor.**
        > <:uye:823577810383667200> **| \`Kaç Puan Seviye Atlama:\` ${sınır1} Olarak Gözüküyor.**
          `)   
        
          message.channel.send({embeds: [NARCOSEMBED]})  
        
        }else {
        
        }

},

name: "seviye-ayarlar",
description: "",
aliases: [],
kategori: "",
usage: "",
}