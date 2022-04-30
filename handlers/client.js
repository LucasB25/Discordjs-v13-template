const { Client, Collection } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {Command} command
 * @returns
 */

module.exports = async (client) => {
    client.commands = new Collection();
    client.slashcommands = new Collection();
    client.config = require("../config.json");
    
    if(!client.config.token || !client.config.prefix) throw new Error("Please provide the required things in config.json")
}
