const colors = require("colors")

module.exports = {
    name: 'ready',
    execute(client) {
        console.log(colors.cyan('thank you for using poltergeist :)'))
    }
}