const MainDashboardRouter = require ('express').Router()

MainDashboardRouter.route("/")
    .get(require("./main.view"))

module.exports = MainDashboardRouter