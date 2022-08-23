module.exports = {
    name: 'roleall',
    description: 'roleall <name>',
    execute(message, args, commandName, client, discord) {
        message.delete();
        let name = args.join(" ");
        var role = message.guild.roles.cache.find(role => role.name === name);
        if (!role) return;

        message.guild.members.cache.filter(m => !m.user.bot).forEach(member => member.roles.add(role));
    }
};