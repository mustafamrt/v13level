const Discord = require("discord.js");
const db = require("nrc.db")


module.exports = {
    calistir: async(client, message, args) => {


        const embed = new Discord.MessageEmbed()

        .setDescription(`
        
        1. Valorant [Tıkla Ve Gör](https://cdn.discordapp.com/attachments/882659273623089173/898928350570090536/narcosvalo1.png)
        2. Valorant [Tıkla Ve Gör](https://cdn.discordapp.com/attachments/882659273623089173/898928368546881596/narcosvalo2.png)
        3. Minecraft [Tıkla Ve Gör](https://cdn.discordapp.com/attachments/882659273623089173/898928393247137863/narcosminecraft1.png)
        4. Minecraft [Tıkla Ve Gör](https://cdn.discordapp.com/attachments/882659273623089173/898928458447585290/narcosminecraft2.png)
        
        Seçmek için: **!kartayar 1-5 **`)

        if (!args[0]) return message.channel.send({embeds: [embed]})

        if(args[0] == "1") {
 
            db.set(`card_${message.author.id}`, "https://cdn.discordapp.com/attachments/882659273623089173/898928350570090536/narcosvalo1.png")
        message.channel.send("Başarılı, Kart Arka Plan Ayarlandı.")
        }
        if(args[0] == "2") {
            db.set(`card_${message.author.id}`, "https://cdn.discordapp.com/attachments/882659273623089173/898928368546881596/narcosvalo2.png")
            message.channel.send("Başarılı, Kart Arka Plan Ayarlandı.")
        }
        if(args[0] == "3") {

            db.set(`card_${message.author.id}`, "https://cdn.discordapp.com/attachments/882659273623089173/898928393247137863/narcosminecraft1.png")
            message.channel.send("Başarılı, Kart Arka Plan Ayarlandı.")
        }
        if(args[0] == "4") {
            db.set(`card_${message.author.id}`, "https://cdn.discordapp.com/attachments/882659273623089173/898928458447585290/narcosminecraft2.png")
            message.channel.send("Başarılı, Kart Arka Plan Ayarlandı.")
        }

 



},

name: "kartayar",
description: "",
aliases: [],
kategori: "",
usage: "",
}