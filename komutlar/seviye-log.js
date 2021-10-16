const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {




        
          
        
           if(args[0] == "sıfırla") {
        
            db.delete(`seviyekanal${message.guild.id}`)
        
            return message.channel.send(` Seviye-Log sıfırlandı!`);
        
          }
        
            
        
            
        
           if (args[0]) {
        
              let akanal =
        
                message.mentions.channels.first() ||
        
                message.guild.channels.cache.find(ff => ff.name === args.slice(1).join(" "));
        
              db.set(`seviyekanal${message.guild.id}`, akanal.id);
        
              message.channel.send(` Seviye Log Kanalı Ayarlandı! Ayarlanan Kanal: <#${akanal.id}> Sıfırlamak için !seviye-log sıfırla`)           
        
            }
        
},

name: "seviye-log",
description: "",
aliases: [],
kategori: "",
usage: "",
}