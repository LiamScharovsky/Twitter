const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [  //Sets the type of input the user can put in 
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            ]
        },
        password: {
            type: String,
            required: true,
            unique: false
        }
    },
    {
        timestamps: true
    }
)

// Whatever goes here is what is exporting. user is getting exported, and is built from the userSchema 
module.exports = mongoose.model("user", userSchema)