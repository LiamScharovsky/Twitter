module.exports = (app) => {
    app.use('/', require('./dashboard'))
    app.use("/user", require('./post'))
}
