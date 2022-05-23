const express = require("express")
const app = express() //everything revolves around this variable
const port = 3000 //the port we'll be using
const path = require('path')


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

app.listen(port, () => {    //app starts at defined port
    console.log(`Server started at port ${port}`)
})
