const MainDashboardRouter = require ('express').Router()

MainDashboardRouter.route("/")
    .get(require("./main.view"))
    .post(require("./create"))
module.exports = MainDashboardRouter