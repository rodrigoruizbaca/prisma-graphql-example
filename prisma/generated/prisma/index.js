"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: "https://rruiz-posts-test.herokuapp.com/rruiz-posts-test/prod",
  secret: "thisismysupercrettext"
});
exports.prisma = new exports.Prisma();
