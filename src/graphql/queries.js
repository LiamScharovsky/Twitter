
const { UserType, PostsType } = require('./types')
const { User, Posts } = require('../models/')
const { GraphQLList, GraphQLID } = require('graphql')

const users = {
    type: new GraphQLList(UserType),                    //type of object the users respond with        
    desciption: 'Query all users in the database',              //shows short description of what it does
    resolve(parent, args) {     //points into users argument as a whole and args points to the thing you're looking for
        return User.find()              //gives all users
    }
}

const user = {                                      //only grabs one user
    type: UserType,
    desciption: 'Query a user by their ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return User.findById(args.id)
    }
}
const posts = {
    type: new GraphQLList(UserType),                    //type of object the users respond with        
    desciption: 'Query all users in the database',              //shows short description of what it does
    resolve(parent, args) {     //points into users argument as a whole and args points to the thing you're looking for
        return Posts.find()              //gives all users
    }
}

const post = {                                      //only grabs one post
    type: UserType,
    desciption: 'Query a user by their ID',
    args: {
        id: { type: GraphQLID }
    },
    resolve(parent, args) {
        return Posts.findById(args.id)
    }
}

module.exports = { users, user, post, posts }    