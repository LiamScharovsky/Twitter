const { GraphQLString } = require('graphql')
const { User, Posts } = require('../models')
const { user } = require('./queries')

// register a user
const register = {
    type: GraphQLString,
    args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString }
    },
    //pass the args to the user model
    async resolve(parent, args) {
        const { username, password, email } = args

        const user = new User({ username, email, password })

        await user.save()

        return 'User signed up'
    } 
}
//session token
const login ={
    type: GraphQLString,
    args: {
        email:{type: GraphQLString},
        password:{type: GraphQLString}
    },
    async resolve (parent, args){
        const user = await User.findOne({ email : args.email})
        if ( !user || args.password !== user.password ){
            return 'User not found or password incorrect'
        }
        return 'User authenticated'
    }
}

module.exports = { register, login }