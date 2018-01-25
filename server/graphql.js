const { makeExecutableSchema } = require('graphql-tools');
const Faker = require('faker');
const { Router }= require('express');
const graphqlHTTP = require('express-graphql');
const _ = require('lodash');

const typeDefs = `
  type Person {
    id: ID!
    name: String!
  }

  input PeopleQueryInput {
    letter: String
  }

  type Query {
    people(input: PeopleQueryInput!): [Person],
  }
`;

let people = [{
  id: Faker.random.uuid(),
  name: 'Adam',
}, {
  id: Faker.random.uuid(),
  name: 'Bob',
}, {
  id: Faker.random.uuid(),
  name: 'Carl',
}];

const resolvers = {
  Query: {
    people: (_obj, { input: { letter } }) => {
      console.log('LOADING PEOPLE FOR LETTER:', letter);
      if (letter) return people.filter(person => _.lowerCase(person.name[0]) === _.lowerCase(letter));
      return people;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

module.exports = graphqlHTTP({
  schema,
  graphiql: true
});
