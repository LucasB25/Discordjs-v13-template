const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {Message} message
 * @param {Array<String>} args
 * @param {String} prefix
 * @returns
 */

module.exports = async (client) => {
    client.user.setPresence({
        status: "online",
        activities: [
            {
                name: "discord.js v13",
                type: "PLAYING"
            }
        ]
    })
    console.log(`[ API ] Logged in as ${client.user.tag}`);
}