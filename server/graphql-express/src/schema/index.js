const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolver');

// Define your types here.
const typeDefs = `
  type Continent {
    id: ID!
    name: String!
    regions: [Region]
  }

  type Region {
    id: ID!
    name: String!
    continent: Continent
    kingdom: Kingdom

  }

  type Kingdom {
    id: ID!
    name: String!
    capital: String!
    regions:[Region]
    house: House
  }

  type House {
    id: ID!
    name: String!
    slogan: String
    titles: [Title]
    people: [People]

  }

  type Title {
    id: ID!
    name: String!,
    id_house: House!
  }

  type People {
    id: ID!
    name: String!
    nickname: String
  }

  type Query {
    allContinents: [Continent!]!
    allRegions: [Region!]!
    allKingdoms: [Kingdom!]!
    allHouses: [House!]!
    allTitles: [Title!]!
    allPeople: [People!]!
  }

`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({typeDefs, resolvers});
