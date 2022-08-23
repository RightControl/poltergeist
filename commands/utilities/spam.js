module.exports = {
    name: 'spam',
    description: 'spam <times to spam> <text>',
    execute(message, args, commandName, client, discord) {
        message.delete()
        for (let step = 0; step < args[0]; step++) {
            const text = args.join(" ").substring(1)
            message.channel.send(text)
        };
    }
};