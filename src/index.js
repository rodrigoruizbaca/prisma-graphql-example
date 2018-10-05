import "@babel/polyfill/noConflict";

import {GraphQLServer, PubSub} from 'graphql-yoga';
import db from './db';
import prisma from './prisma';
import directiveResolvers from './resolvers/DirectiveResolvers';
import { resolvers, fragmentReplacements} from './resolvers';
 
const pubSub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  directiveResolvers,
  resolvers,
  fragmentReplacements,
  context (request) {
    return {
      db, pubSub, prisma, request
    };
  }
});

server.start({
  port: process.env.PORT || 4000
}, () => {
  console.log("Server up!");
});

//  prisma deploy -e ../config/prod.env