const { default: axios } = require("axios")

module.exports = async (req, res) =>{
           res.render('user', { user: req.verifiedUser.user })
}