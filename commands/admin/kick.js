module.exports = {
    name: 'kick',
    description: 'kick <@user>',
    execute(message, args, commandName, client, discord) {
        message.delete();
        const user = message.mentions.members.first()
        if(args[0] && user) {
            try {
                user.kick();
            } catch (err) {
                
            }
        }
    }
};