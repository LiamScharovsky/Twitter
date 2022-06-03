const UserPageRouter = require("express").Router()

UserPageRouter.route("/:slug")
    .get(require("./user.view"))
    
module.exports = UserPageRouter