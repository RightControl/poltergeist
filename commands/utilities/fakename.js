const { faker } = require("@faker-js/faker")

module.exports = {
    name: 'fakename',
    description: 'sends a fake name',
    execute(message, args, commandName, client, discord) {
        message.delete();
        message.channel.send(faker.name.fullName())
    }
};