const util = require("../../poltergeist/util")

module.exports = {
    name: 'role',
    description: 'role <@user> <name>',
    execute(message, args, commandName, client, discord) {
        message.delete();
        var user = message.mentions.members.first();
        var roleName = util.removeFirstWord(args.join(" "));
        var role = message.guild.roles.cache.find(role => role.name === roleName);
        if (!role) return;
        try {
            user.roles.add(role);
        } catch(err) {

        }
    }
};