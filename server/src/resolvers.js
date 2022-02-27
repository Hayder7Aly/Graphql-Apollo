
const Pet = require("./models/Pet")
const User = require("./models/User")

const resolvers = {

    Query: {
        async user(){
            console.log("QUERY => user")
            return await User.find()
        },

        async pets(){
            console.log("QUERY => pets")
            return await Pet.find()
        }
    },

    Mutation : {
        async addUser(_, {input}){
            return await User.create(input)
        },

        async addPet(_, {input}){
            return await Pet.create(input)
        }
    },
    User: {
        async pets(parentResolver){
            console.log("QUERY => user => pets");
            return await Pet.find({owner: parentResolver._id})
        },     
    },
    
    Pet: {
        async owner(parentResolver){
            console.log("QUERY => pets => owner")
            return await User.findById(parentResolver.owner)
        }
    }

}




module.exports = resolvers