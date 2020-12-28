import { ApolloServer, ServerInfo } from 'apollo-server';

import typeDefs from './typeDefs';

interface Book {
  title: string;
  author: string;
}

const books: Array<Book> = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: (): Array<Book> => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }: ServerInfo) => {
  console.log(`🚀  Server ready at ${url}`);
});