const discord = require("discord.js-selfbot-v13")
const { GatewayIntentBits } = require("discord.js");
const client = new discord.Client({checkUpdate: false});

const { token }  = require("./config.json");


client.commands = new discord.Collection();

['eventsHandler', 'commandsHandler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, discord)
})



client.login(token);