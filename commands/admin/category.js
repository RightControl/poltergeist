module.exports = {
    name: 'category',
    description: 'category <name>',
    execute(message, args, commandName, client, discord) {
        message.delete();
        text = args.join(" ");
        message.guild.channels.create(text, {
            type: "GUILD_CATEGORY"
        });
    }
};