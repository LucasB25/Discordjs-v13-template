const { Permissions, Client, Message } = require("discord.js");

module.exports = {
    name: "say",
    description: "To say or repeat something that you say.",
    perms: {
        client: [Permissions.DEFAULT],
        user: [Permissions.FLAGS.MANAGE_MESSAGES]
    },
    aliases: ["repeat"],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     * @returns 
     */

    execute: async (client, message, args) => {
        if(!args[0]) return message.reply({
            content: `Please give me a message.`
        });

        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if(!channel) {
            await message.channel.send({
                content: `${args.join(" ")}`
            });
        } else {
            if(!args.slice(1).join(" ")) return message.reply({
                content: `Please give me a message.`
            });

            await channel.send({
                content: `${args.slice(1).join(" ")}`
            });
        }


    }

}