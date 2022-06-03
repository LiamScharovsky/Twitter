const mongoose = require("mongoose")

const postsSchema = mongoose.Schema(
    {
        body: {
            type: String,
            required: true,
            unique: false,  
        },
        userId:{
            type: String,
            require: true,
            unique: true,
        }
    },
    {
        timestamps: true
    }
)

// Whatever goes here is what is exporting. user is getting exported, and is built from the userSchema 
module.exports = mongoose.model("posts", postsSchema)