const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  enum ShoeBrandType {
    YODA
    NIKE
    ADDIDAS
    TEVEL
  }

  type User {
    id: Int!
    name: String!
    email: String!
    shoes: [Shoe]!
  }

  interface Shoe {
    name: String!
    size: Int!
    brand: ShoeBrandType!
    user: User!
  }



  type Sneaker implements Shoe {
    name: String!
    size: Int!
    brand: ShoeBrandType!
    sport: String!
    user: User!

  }
 
  type Boot implements Shoe {
    name: String!
    size: Int!
    brand: ShoeBrandType!
    hasGrip: Boolean
    user: User!

  }

  input addNewShoe {
      name: String!
      brand: ShoeBrandType!
      size: Int!
      
  }

  input showInput {
      name: String
      brand: ShoeBrandType
      size: Int
  }

  type Query {
    shoes(input: showInput): [Shoe]!
    me(id: Int): User!
  }

  type Mutation{
      addShoe(input: addNewShoe!): Shoe!
  }
`;

const data = [
  { name: "Senta", brand: "YODA", size: 8, sport: "BasketBall", user: 1 },
  { name: "Zemi", brand: "NIKE", size: 7, hasGrip: true, user: 2},
  { name: "Tilta", brand: "ADDIDAS", size: 9, sport: "Football", user: 1 },
  { name: "Felto", brand: "TEVEL", size: 6, hasGrip: false , user: 2},
];

const users = [
    {id : 1, name: "Hayder", email: "007harryjutt@gmail.com" , shoes: []},
    {id : 2, name: "Aly", email: "007razajutt@gmail.com" , shoes: []}
]

const resolvers = {
  Query: {
    shoes(parentResolver, args, context, info) {
      return data;
    },
    me(_, {id}) {
        
      return users.find(user => user.id === id)

    },
  },

  Mutation: {
    addShoe(_, {input}){
        const shoe = input
        data.push(shoe)
        return shoe
    }
  },

  Shoe: {
    __resolveType(shoe) {
      if (shoe.sport) return "Sneaker";
      return "Boot";
    },
  },

  Sneaker: {
      user(obj){
          return users.find(user => user.id === obj.user)
      }
  },

  Boot: {
      user(obj){
          return users.find(user => user.id === obj.user)
      }
  },


  User: {
      shoes(obj){
          return data.filter(shoe => shoe.user === obj.id)
          
      }
  }

  
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4000, () => console.log("server is listening !"));


