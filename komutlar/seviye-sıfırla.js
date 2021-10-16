const Discord = require("discord.js");
const db = require("nrc.db")
const ayarlar = require("../ayarlar.json")


module.exports = {
    calistir: async(client, message, args) => {

        await message.guild.members.fetch()
        if(message.author.id !== message.guild.ownerId) return message.channel.send(` **Bu komutu kullanabilmek için "\`Sunucu Sahibi\`" Olman Gerekli.**`);

        
          
        
        db.delete(`seviyesınır${message.guild.id}`)
        
        db.delete(`seviyexp${message.guild.id}`)
        
        db.delete(`seviyekanal${message.guild.id}`)
        
         return message.channel.send(new Discord.MessageEmbed()
        
        .setColor("RANDOM")
        
        .setThumbnail(client.user.avatarURL()) 
        
        .setDescription(` Seviye-Sistemi Bütün Ayarlamaları Sıfırlandı!`)
        
        .setFooter(`${client.user.username} Seviye Sistemi!`)   )


},

name: "seviye-sıfırla",
description: "",
aliases: [],
kategori: "",
usage: "",
}