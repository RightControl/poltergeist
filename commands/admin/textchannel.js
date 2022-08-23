module.exports = {
    name: 'textchannel',
    description: 'textchannel <name>',
    execute(message, args, commandName, client, discord) {
        message.delete();
        text = args.join(" ");
        message.guild.channels.create(text, {
            type: "text"
        });
    }
};