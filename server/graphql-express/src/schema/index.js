const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolver');

// Define your types here.
const typeDefs = `
  type Continent {
    id: ID!
    name: String!
  }

  type Region {
    id: ID!
    name: String!
  }

  type Kingdom {
    id: ID!
    name: String!
  }

  type House {
    id: ID!
    name: String!
  }

  type Title {
    id: ID!
    name: String!
  }

  type Query {
    allContinents: [Continent!]!
    allRegions: [Region!]!
    allKingdoms: [Kingdom!]!
    allHouses: [House!]!
    allTitles: [Title!]!
  }

`;




// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});
