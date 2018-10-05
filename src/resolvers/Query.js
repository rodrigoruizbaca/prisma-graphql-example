const Query = {
  users: (parent, args, {db, prisma}, info) => {
    const prismaArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after,
      orderBy: args.orderBy
    };
    if (args.query) {
      prismaArgs.where = {
        OR: [{
          name_contains: args.query
        },{
          email_contains: args.query
        }]
      };
    }

    return prisma.query.users(prismaArgs, info);
  },
  posts: (parent, args, {db, prisma}, info) => {
    const prismaArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after
    };
    if (args.query) {
      prismaArgs.where = {
        OR: [{
          title_contains: args.query
        },{
          body_contains: args.query
        }]
      };
    }
    return prisma.query.posts(prismaArgs, info);
  },
  authors: (parent, args, {db}, info) => {
    return db.users;
  },
  comments: (parent, args, {db, prisma}, info) => {
    const prismaArgs = {
      first: args.first,
      skip: args.skip,
      after: args.after
    };
    if (args.query) {
      prismaArgs.where = {
        text_contains: args.query        
      };
    }
    return prisma.query.comments(prismaArgs, info);
  }
};

export {Query as default};