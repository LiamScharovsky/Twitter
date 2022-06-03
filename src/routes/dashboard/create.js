const axios = require("axios")

module.exports = async (req,res)=>{
    const postData = req.body

    const postObject = {
        userId: req.verifiedUser.user.__id,
        body: postData.body
    }

    const mutation = `
        mutation createPost ($userId: String!, $body: String!){
        createPost(userId : $userId, $body : body)            
        }
    `
    try {
        const data = await axios.post('http://localhost:3000/graphql', {
            query: mutation,
            variables: postObject
        },
        {
            'Content-Type': 'application/json'
        })
        console.log(data)
        res.redirect('/')
    }catch (e){ 
        console.log(e)
        console.log(e.response.data.errors)
    }
}