const express = require("express")
const dotenv = require("dotenv")
const { connectDB } = require("./src/db")
const { graphqlHTTP } = require("express-graphql")
const path = require('path')

const schema = require("./src/graphql/schema")
const app = express()

dotenv.config()
connectDB()


app.use('/', ('/graphql', graphqlHTTP)({
    schema,
    graphiql: true
}))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './templates/views/'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/profile', (req, res) => {
    res.render('profile')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.get('/user', (req, res) => {
    res.render('user')
})






app.listen(process.env.PORT, (req, res) => {
    console.log(`FakeTwitterrunning on port ${process.env.PORT}`)
})