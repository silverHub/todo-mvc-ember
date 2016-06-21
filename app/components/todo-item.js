import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'li',
  classNameBindings: ['completed'],
  completed: false,
  actions:{
    complete() {
      console.log(this);
      this.toggleProperty('completed');
    },
    delete() {
      console.log('deleted');
    }
  }
});
