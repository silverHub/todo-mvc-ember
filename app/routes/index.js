import Ember from 'ember';

let todos = [
  {id: 1, title: 'Todo1'},
  {id: 2, title: 'Todo2'},
  {id: 3, title: 'Todo3'},
];

export default Ember.Route.extend({
  model(){
    return todos;
  },
  actions:{
    deleteItem(todo){
      let index = todos.indexOf(todo);
      console.log('delete action in router', todo, index);
      todos.splice(index,1);
    },
    completeItem(todo){
      let completedTodo = todos.find(x => x.id === todo.id);
      completedTodo.completed = true;
      console.log('complete action in router', todo, todos);
    }
  }

});
