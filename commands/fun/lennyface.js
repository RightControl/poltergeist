module.exports = {
    name: 'lennyface',
    description: 'Sends a lenny face.',
    async execute(message, args, commandName, client, discord) {
        message.delete();
        message.channel.send(' ͡° ͜ʖ ͡°')
    }
};