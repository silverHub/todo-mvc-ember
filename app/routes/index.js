import Ember from 'ember';

let todos = [
  { title: 'Todo1'},
  { title: 'Todo2'},
  { title: 'Todo3'},
];

export default Ember.Route.extend({
  model(){
    return todos;
  }

});
