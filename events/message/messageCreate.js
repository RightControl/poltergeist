const { Client, msg } = require('discord.js');
const { prefix } = require("../../config.json");

module.exports = {
    name: 'messageCreate',
    /**
     * @param {Client} client
     * @param {msg} message
     */
    async execute(message, client, discord) {
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return;

        try {
            command.execute(message, args, commandName, client, discord)
        } catch (error) {
            console.log(error)
        }
    }
}