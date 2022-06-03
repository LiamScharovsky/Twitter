const { GraphQLString } = require('graphql')
const { User, Posts } = require('../models')
const { user } = require('./queries')
const createjwTToken = require("../util/auth")
// register a user
const register = {
    type: GraphQLString,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const { username, password, email } = args

        const user = new User({ username, email, password })

        await user.save()

        const token = createJwtToken(user)
        return token
    }
}
//session token
const login = {
    type: GraphQLString,
    args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    },
    async resolve(parent, args) {
        const user = await User.findOne({ email: args.email })

        if (!user || args.password !== user.password) {
            throw new Error("Invalid credentials")
        }

        const token = createJwtToken(user)
        return token
    }
}

const makePost = {
    type: GraphQLString,
    args: {
        body:{
            type: GraphQLString
        },
        userId: { type: GraphQLString}
    },
    async resolve (parent, args){
        const post = new Posts({
            body: args.body,
            userId: args.userId
        })
    await post.save()
        return makePost
    }
}

module.exports = { register, login, makePost }