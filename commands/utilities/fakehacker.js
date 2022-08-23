const { faker } = require("@faker-js/faker")

module.exports = {
    name: 'fakehacker',
    description: 'sends a hacker phrase',
    execute(message, args, commandName, client, discord) {
        message.delete();
        message.channel.send(faker.hacker.phrase())
    }
};