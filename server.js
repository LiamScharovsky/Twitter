const express = require("express")
const dotenv = require("dotenv")
const { connectDB } = require("./src/db")
const { graphqlHTTP } = require("express-graphql")
const path = require('path')

const schema = require("./src/graphql/schema")

dotenv.config()

connectDB()

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './src/templates/views/'))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


//import routes
require("./src/routes/")(app)

app.listen(process.env.PORT, (req, res) => {
    console.log(`FakeTwitterrunning on port ${process.env.PORT}`)
})