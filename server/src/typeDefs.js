const { gql } = require("apollo-server")

const typeDefs = gql`

    type User {
        name: String!
        email: String!
        pets: [Pet]!
    }

    type Pet {
        name: String!
        type: String!
        height: Int!
        owner: User!
    }

    input addNewUserInput {
        name: String!
        email: String!
    }

    input addNewPetInput {
        name: String!
        type: String
        height: Int!
        owner: String!
    }


    type Query {
        user : [User]!
        pets: [Pet]!
    }

    type Mutation {
        addUser(input: addNewUserInput!) : User! 
        addPet(input: addNewPetInput!): Pet!
    }
    
`

module.exports = typeDefs
