import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+---- save acction bubbled up to application route');
    },
    cancel: function() {
      console.log('+---- cancel action bubbled up to application route');
    }
  }
});
