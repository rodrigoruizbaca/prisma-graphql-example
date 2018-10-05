import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const Mutation = {
  login: async (parent, args, {prisma}, info) => {
    const found = await prisma.query.user({
      where: {
        email: args.email
      }
    });

    if (!found) {
      throw new Error('User or password not found!'); 
    }

    const match = await bcrypt.compare(args.password, found.password);

    if (!match) {
      throw new Error('User or password not found!'); 
    }

    return {user: found, token: jwt.sign(found, "thisisasecret")};
  },
  createUser: async (parent, args, {db, prisma, currentUserId}, info) => {    
    
    const band = await prisma.exists.User({email: args.user.email});
    if (!band) {
      const password = await bcrypt.hash(args.user.password, 10);
      const user = await prisma.mutation.createUser(
        {
          data: {
            email: args.user.email,
            name: args.user.name,
            password
          }
        });
      return {user, token: jwt.sign(user, "thisisasecret")};  
    } else {
      throw new Error('Email already exists');
    }
  },
  createPost: async (parent, args, {prisma, currentUserId}, info) => {
    console.log("currentUserId",currentUserId);  
    const {title, body, published} = args.post;
    return prisma.mutation.createPost(
      {
        data: {
          title, body, published,
          author: {  
            connect: {          
              id: currentUserId            
            }
          }
        }        
      }, info);
  },
  createComment: (parent, args, {db, prisma}, info) => {
    const {text, author, post} = args.comment;
    return prisma.mutation.createComment({
      data: {
        text,
        author: {
          connect: {
            id: author
          }
        },
        post: {
          connect: {
            id: post
          }
        },
      }
    },info);
        
  }
};

export {Mutation as default};
