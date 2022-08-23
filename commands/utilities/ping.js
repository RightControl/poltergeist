

module.exports = {
    name: 'ping',
    // aliases: ['latency']
    description: 'latency command what else',
    execute(message, args, commandName, client, discord) {
        message.delete();
        message.channel.send(`bot latency: ${client.ws.ping}`)
    }
};