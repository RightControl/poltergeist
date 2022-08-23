const { faker } = require("@faker-js/faker")

module.exports = {
    name: 'fakeaddress',
    description: 'sends a fake address',
    execute(message, args, commandName, client, discord) {
        message.delete();
        message.channel.send(faker.address.streetAddress())
    }
};