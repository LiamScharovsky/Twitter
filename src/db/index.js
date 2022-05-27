const mongoose = require('mongoose')

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI)        //connecting connectDB
    console.log("MongoDB COnneted!")
}

module.exports = {
    connectDB
}