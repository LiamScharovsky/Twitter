const mongoose = require("mongoose")

const postsSchema = mongoose.Schema(
    {
        Body: {
            type: String,
            required: true,
            unique: false,
        
    }},
    {
        timestamps: true
    }
)

// Whatever goes here is what is exporting. user is getting exported, and is built from the userSchema 
module.exports = mongoose.model("posts", postsSchema)