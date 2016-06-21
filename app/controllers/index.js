import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    addTodo(text, event){
      if (event.keyCode === 13) {
        //enter happened
        let model = this.get('model');
        model.addObject({
          title: text
        });
        this.set('newTodo','');
      }
    }
  }
});
