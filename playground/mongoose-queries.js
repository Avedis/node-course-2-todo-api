const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// var id = '69c7110e1d0c7458360f18c811';

// if(!ObjectID.isValid(id)) {
//   return console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo)
// }).catch(e => console.log(e));


var id = '59c6c371ed414fe803330272';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('ID not found');
  }
  console.log('User By Id', user)
}).catch(e => console.log(e));