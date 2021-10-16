
  const Discord = require("discord.js");



  module.exports = {
      calistir: async(client, message, args) => {
          
        await message.guild.members.fetch()
        if(message.author.id !== message.guild.ownerId) return message.channel.send(` **Bu komutu kullanabilmek için "\`Sunucu Sahibi\`" Olman Gerekli.**`);

        
          
        
          
        
          if(args[0] == "sıfırla" || args[0] == "reset") {
        
            db.set(`seviyesınır${msg.guild.id}`, 250)
        
            return msg.channel.send(` Seviye-Sınır Başarıyla Sıfırlandı! Varsayılan: \`500\``)
        
         }
        
          let sayı = args[0]
        
          if(!sayı) return msg.channel.send(` Seviye bir sayı olmalı!`)
        
          if(sayı < 100) return msg.channel.send(` En Az 100'e Kadar Bir Sayı Girebilirsiniz!`)
        
          if(sayı > 500) return msg.channel.send(` En Fazla 500'e Kadar Bir Sayı Girebilirsiniz!`)
        
          db.set(`seviyesınır${msg.guild.id}`, args[0])
        
          return msg.channel.send(" Başarıyla Seviye Sınırını \`" + args[0] + "\` Olarak Ayarladınız!")  
  
  
  
  },
  
  name: "seviye-sınır",
  description: "",
  aliases: [],
  kategori: "",
  usage: "",
  }