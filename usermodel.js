const mongoose = require("mongoose")
const userscema = new mongoose.Schema({
    Username: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type : String
    }
})

const user = mongoose.model("user", userscema);

module.exports = user