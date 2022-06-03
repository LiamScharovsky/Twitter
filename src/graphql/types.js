const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require("graphql")
// import mongoose models
const { User, Posts } = require('../models')

//GraphQL allows to work with database. To make it easy to work with, we make a GraphQlObjectType
//If we needed join statements, they would already be here
const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User Type',
    fields: () => ({
        id: { type: GraphQLID },
        slug: { type: GraphQLString },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        posts: {
            type: GraphQLList(PostsType),
            resolve (parent, args){
                return Posts.find({ userId: parent.id})
            }
        },
    })

})

const PostsType = new GraphQLObjectType({
    name: 'Posts',
    description: 'Posts type',
    fields: () => ({
        id: { type: GraphQLString },
        userId: { type: GraphQLString },
        body: {type:GraphQLString}
    })
})
module.exports = {
    UserType, PostsType
}