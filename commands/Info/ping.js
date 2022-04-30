const { Permissions, Client, Message } = require("discord.js");

module.exports = {
    name: "ping",
    description: "To get the latency of the bot.",
    perms: {
        client: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.EMBED_LINKS],
        user: [Permissions.FLAGS.SEND_MESSAGES]
    },
    aliases: [],

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args
     * @returns 
     */
    execute: async (client, message) => {
        message.reply({
            content: `Bot Ping: \`${Math.floor((Date.now() - message.createdTimestamp) - 2 * Math.floor(client.ws.ping))} ms\``,
            ephemeral: true
        }).catch(() => {});
    }
}