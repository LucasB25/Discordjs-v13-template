const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "To get the latency of the bot",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {String[]} args
     * @returns
     */

    execute: async (client, interaction) => {
        const { createdTimestamp } = interaction;

        await interaction.deferReply().catch(() => {});
        await interaction.editReply({
            ephemeral: true,
            content: `Bot Ping: \`${Math.floor((Date.now() - createdTimestamp) - 2 * Math.floor(client.ws.ping))} ms\``,
            ephemeral: true
        }).catch(() => {});
    }
}
