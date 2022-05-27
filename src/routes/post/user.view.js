const { default: axios } = require("axios")

module.exports = async (req, res) =>{
    const slug = req.params.slug
    
    const query = `
    query userBySlug($slug: String!){
        userBySlug(slug: $slug){
        username,
        email,
        posts {
        body
        }
        }
    }
    `
    try{
        const userData = await axios.get('http://localhost:3000/graphql', {
            data: {
                query,
                variables: {
                    slug
                }
            },
            'Content-Type': 'application/json'
        })

        const user = userData.data.data.userBySlug
        if (!user){
            res.redirect('/')
            return
        }
        res.render('user', { user })
    } catch (e){
        console.log(e)
    }
}