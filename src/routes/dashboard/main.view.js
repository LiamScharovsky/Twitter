const axios = require("axios")

module.exports = async (req, res) =>{
    
    const query = `
        query user($id: ID!) {
            user( id: $id ) {
                id,
                slug,
                username,
                email,
                posts{
                    id,
                    body
                }
            }
        }
    `

    try {
        graphqlRes = await axios.get("http://localhost:3000/graphql", {
            data: {
                query,
                variables: {
                    id: "629101ff3c309d7ca8c8d4d5"
                }
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } catch (e){
    }
    const posts = (graphqlRes.data.data.user)
    posts.posts = posts.posts.sort((a,b)=> a.order - b.order)
    res.render("dashboard", { posts })
}