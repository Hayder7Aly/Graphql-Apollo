const {ApolloServer} = require("apollo-server")
const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")
const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose.connect("mongodb://localhost:27017/graphql")
}

connectToDB()

const server = new ApolloServer({typeDefs, resolvers})



server.listen(4000, ()=> console.log("Server is listening on : 4000"))