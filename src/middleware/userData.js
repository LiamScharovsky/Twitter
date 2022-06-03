const axios = require("axios")

const userData = async (req, res, next) => {
    if (!req.verifiedUser) {
        next()
        return
    }

    const query = `
        query user($id: ID!) {
            user(id: $id) {
                id,
                posts {
                    id,
                    body,
                    },
            }
        }
    `

    try {
        const data = await axios.get('http://localhost:3000/graphql', {
            data: {
                query,
                variables: {
                    id: req.verifiedUser.user._id
                }
            }
        })

        req.verifiedUser.user.posts = data.data.data.user.posts
        next()
    } catch (e) {
        console.log(e)
        res.redirect('/auth/login')
    }
}

module.exports = userData