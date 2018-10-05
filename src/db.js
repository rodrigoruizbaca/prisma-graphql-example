const comments = [{
  id: "1",
  text: "Comment 1",
  author: "1",
  post: "1"
},
{
  id: "2",
  text: "Comment 2",
  author: "1",
  post: "1"
},
{
  id: "3",
  text: "Comment 3",
  author: "2",
  post: "1"
},
{
  id: "4",
  text: "Comment 4",
  author: "2",
  post: "2"
}];

const posts = [{
  id: "1",
  title: "Uno",
  published: true,
  author: "1"
},
{
  id: "2",
  title: "Dos",
  published: false,
  author: "2"
}];

const users = [{
  id: "1",
  name: "Rodrigo"
},
{
  id: "2",
  name: "Erika"
}];

const db = {
  users, comments, posts
};

export {db as default};