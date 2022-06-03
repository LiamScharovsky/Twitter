
const { UserType, PostsType } = require('./types')
const { User, Posts } = require('../models/')
const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query all users in the database',
    resolve(parent, args) {
        return User.find()
    }
}

const user = {
    type: UserType,
    description: 'Query a user by their ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}
const posts = {
    type: new GraphQLList(UserType),                    //type of object the users respond with        
    description: 'Query all posts in the database',              //shows short description of what it does
    resolve(parent, args) {     //points into users argument as a whole and args points to the thing you're looking for
        return Posts.find()              //gives all users
    }
}

const post = {                                      //only grabs one post
    type: UserType,
    description: 'Query a post by their ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return Posts.findById(args.id)
    }
}

const userBySlug = {
    type: UserType,
    description: "Query our users based on slug",
    args: {
        slug: { type: GraphQLString}
    },
    resolve (parent, args) {
        return User.findOne ({ slug: args.slug })
    }
}

module.exports = { users, user, post, posts, userBySlug }    