module.exports = {
    name: 'createrole',
    description: 'createrole <name>',
    execute(message, args, commandName, client, discord) {
        message.delete();
        try {
            message.guild.roles.create({
                name: args.join(" "),
                color: 'RED',
                reason: ""
            })
        } catch (err) {
            
        }

    }
};