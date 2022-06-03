module.exports = async (req,res) =>{
    res.cookies('jwTToken', 'LOGGEDOUT', {maxAge:900000, httpOnly: true})
    res.redirect('./auth/login')
}