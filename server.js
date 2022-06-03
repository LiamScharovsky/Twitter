const express = require("express")
const dotenv = require("dotenv")
const { connectDB } = require("./src/db")
const { graphqlHTTP } = require("express-graphql")
const path = require('path')
const cookiePareser = require ('cookie-parser')



const schema = require("./src/graphql/schema")
const authenticate = require("./src/middleware/authenticate")
const userData = require("./src/middleware/userData")

dotenv.config()

connectDB()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/templates/views/'))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.urlencoded({ extended: true }))

app.use(cookiePareser())
app.use(authenticate)
app.use(userData)

//import routes
require("./src/routes/")(app)

app.listen(process.env.PORT, (req, res) => {
    console.log(`FakeTwitterrunning on port ${process.env.PORT}`)
})