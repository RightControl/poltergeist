module.exports = {
    name: 'ban',
    description: 'ban <@user>',
    execute(message, args, commandName, client, discord) {
        message.delete();
        const user = message.mentions.members.first()
        if(args[0] && user) {
            try {
                user.ban();
            } catch (err) {
                
            }
        }
    }
};