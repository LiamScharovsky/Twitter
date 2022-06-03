module.exports = (app) => {
    app.use("/auth", require("./auth"))
    app.use('/', require('./dashboard'))
    app.use("/user", require('./post'))
}
