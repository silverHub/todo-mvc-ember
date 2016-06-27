import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'li',
  classNameBindings: ['completed','editing'],
  completed: false,
  editing: false,
  actions:{
    completeTodo(item) {
      console.log(this, arguments);
      this.toggleProperty('completed');
      this.sendAction('complete', item);
    },
    changeValue(){
      if (event.keyCode === 13) {
          this.toggleProperty('editing');
      }
    },
    deleteTodo(item) {
      console.log('delete action in component');
      this.sendAction('delete', item);
    },
    edit(){
      console.log('edit action in component');
      this.toggleProperty('editing');
    }

  }
});
