import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      console.log('+- save action i friends new controller');
      return true; // make it continue bubbling
    },
    cancel: function() {
      console.log('+- cancel action i friends new controller');
      return true;
    }
  }
});
