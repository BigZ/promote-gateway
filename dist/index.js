"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var typeDefs_1 = __importDefault(require("./typeDefs"));
var books = [
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
var resolvers = {
    Query: {
        books: function () { return books; },
    },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
var server = new apollo_server_1.ApolloServer({ typeDefs: typeDefs_1.default, resolvers: resolvers });
// The `listen` method launches a web server.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
