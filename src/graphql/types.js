const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require("graphql")
// import mongoose models
const { user, posts } = require('../models/')

//GraphQL allows to work with database. To make it easy to work with, we make a GraphQlObjectType
//If we needed join statements, they would already be here
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User Type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        // posts: {}
    })

})

const PostsType = new GraphQLObjectType({
    name: 'Posts',
    description: 'Posts type',
    field: () => ({
        id: { type: GraphQLString },
        order: { type: GraphQLInt },
        userId: { type: GraphQLString }
        // body: {}
    })
})
module.exports = {
    UserType, PostsType
}