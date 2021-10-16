const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {


      await message.guild.members.fetch()
      if(message.author.id !== message.guild.ownerId) return message.channel.send(` **Bu komutu kullanabilmek için "\`Sunucu Sahibi\`" Olman Gerekli.**`);

        
          if(args[0] == "sıfırla" || args[0] == "reset") {
        
            db.delete(`seviyexp${msg.guild.id}`)
        
            return msg.channel.send(` Seviye-XP sıfırlandı! Default: \`5\``);
        
          }
        
        let sayı = args[0]
        
        if(!sayı) return msg.channel.send(" Lütfen Bir Sayı Giriniz!")
        
        if(sayı > 20) return msg.channel.send(" Max 20 Olarak Ayarlıyabilirsin.")
        
        db.set(`seviyexp${msg.guild.id}`, Math.floor(args[0]))
        
        return msg.channel.send(" Başarıyla Seviye Puanını \`" + args[0] + "\` Olarak Ayarladınız!")

},

name: "seviye-xp",
description: "",
aliases: [],
kategori: "",
usage: "",
}