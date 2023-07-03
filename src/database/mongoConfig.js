const mongoose = require("mongoose")

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected database")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
}
