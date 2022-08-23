module.exports = {
    name: 'timeout',
    description: 'timeout <seconds> <@user>',
    async execute(message, args, commandName, client, discord) {
        message.delete();
        const user = message.mentions.members.first();
        const seconds = args[0];
        if (user) {
            const ms = seconds * 1000
            if (ms) {
                try {
                    user.timeout(ms, "");
                } catch (err) {
                    
                };
            };
        };
    }
};