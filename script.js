const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
const config = require("./config.json");

var token = config.TOKEN;
var prefix = config.PREFIX;

client.on("ready", () => {
    console.log("Bot prendido");
})

client.on("message", message => {
    if (message.content.startsWith(`${prefix}test`)) {
        message.channel.send("Hola!");
    }
})

client.on("message", message => {
    if (message.content.startsWith(`${prefix}embed`)) {
        const embed = new discord.MessageEmbed()
        .setTitle("Título")
        .setDescription("¿Hola, como estás?")
        .setFooter("Creado por donblasep")
        .setTimestamp()
        message.channel.send(embed);    
    }
})

client.on("message", message => {
    if(message.content.startsWith(`${prefix}8ball`)) {

        if(message.author.bot) {
            return;
        }

        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        let annoucement = args.slice(0).join(" ");

        if(annoucement == "") {
            message.channel.send("**Debes enviar una pregunta**");
        } else {
            var respuestas = ["si", "no", "tal vez", "puede ser"];
            let numeroRespuestas = respuestas.length;
    
            let number = Math.floor(Math.random() * numeroRespuestas);
    
            const embed = new discord.MessageEmbed()
            .setTitle("8ball")
            .addField("Pregunta", annoucement)
            .addField("Respuesta", respuestas[number])
            .addField("Autor", message.author)
            .setImage("https://media0.giphy.com/avatars/P8ball/BKVY30EuiZPu.gif")
            .setTimestamp()
    
            message.channel.send(embed);
        }

    }
})

client.login(token);