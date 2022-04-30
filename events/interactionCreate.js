const { Client, Interaction } = require("discord.js");

/**
 * @param {Client} client
 * @param {Interaction} interaction
 * @returns
 */

module.exports = async (client, interaction) => {
    if(interaction.isCommand()) {
        const slash_commands = client.slashcommands.get(interaction.commandName);
        if(!slash_commands) return interaction.followUp({ content: "This interaction failed." });

        try {
            slash_commands.execute(client, interaction);
        } catch (e) {
            console.error(e)
        }
    } else return;
}