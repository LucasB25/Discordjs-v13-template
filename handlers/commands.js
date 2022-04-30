const { readdirSync } = require("fs");
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
    readdirSync("./commands/").forEach((dir) => {
        const commandFiles = readdirSync(`./commands/${dir}/`).filter((files) => files.endsWith(".js"));

        for (const file of commandFiles) {
            const command = require(`../commands/${dir}/${file}`);
            if(!command.name) throw new Error("Please provide a command name.");
            if(!command.description) throw new Error("Please provide a command description.")

            client.commands.set(command.name, command);
        }
    });

    client.on("ready", () => {
        console.log(`Total Commands Loaded: ${client.commands.size}`);
    });
}