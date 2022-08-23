module.exports = {
    name: 'leave',
    description: 'Leaves the guild youre in',
    execute(message, args, commandName, client, discord) {
        message.delete();
        message.guild.leave()
    }
};