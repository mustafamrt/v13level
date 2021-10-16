const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {



      await message.guild.members.fetch()
      if(message.author.id !== message.guild.ownerId) return message.channel.send(` **Bu komutu kullanabilmek için "\`Sunucu Sahibi\`" Olman Gerekli.**`);

        
        let link = `[Destek Sunucusu!](https://discord.gg/ZBmqym9JhG)`
        
        let p = ayarlar.prefix
        
        if(!args[0]) {
        
        return message.channel.send(new Discord.MessageEmbed()                              
        
        .setColor("RANDOM")
        
        .setTitle(`${client.user.username} | Seviye-Rol Komutları!`)
        
        .setDescription(`**${link}`)          
        
        .setTimestamp()        
        
        .setThumbnail(client.user.avatarURL())   
        
        .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL())  
        
        .addField(`Rol oluşturma:`, `\`${p}seviye-rol @etiket <seviye>\``)
        
        .addField(`Tüm rolleri silme:`, `\`${p}seviye-rol temizle\``)
        
        .addField(`Ayarlanan Rolleri Görmek:`, `\`${p}seviyerolleri\``)) 
        
        .setImage(`https://api.creavite.co/out/4ef159f7-fb60-492b-89d3-13d8df0d5cd7_350kb.gif`)
        
        }
              if(args[0] == 'temizle' || args[0] == "clear") {
        
                db.delete(`srol.${message.guild.id}`)
        
                db.delete(`srol2.${message.guild.id}`)
        
                db.delete(`srol3.${message.guild.id}`)
        
                return message.channel.send(`Seviye-Rol Başarıyla Sıfırlandı!\n`)
        
              }
        
              if(isNaN(args[1])) return message.channel.send(` Seviye bir sayı olmalı!`)
        
              var user = message.mentions.users.first() || message.author
        
              var role = message.mentions.roles.first()
        
              db.push(`srol.${message.guild.id}`, role.id)
        
              db.set(`srol2.${message.guild.id}.${role.id}`, args[1])
        
              db.push(`srol3.${message.guild.id}.${role.id}`, args[1])
        
              message.channel.send(args[1]+ ' level ' +role + ' olarak ayarlandı!')
        
},

name: "seviye-rol",
description: "",
aliases: [],
kategori: "",
usage: "",
}