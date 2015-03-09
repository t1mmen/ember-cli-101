import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.first_name',
    'model.last_name',
    'model.twitter',
    function() {

      console.log(this.get('model.email'));

      return !Ember.isEmpty(this.get('model.email')) &&
        !Ember.isEmpty(this.get('model.first_name')) &&
        !Ember.isEmpty(this.get('model.last_name')) &&
        !Ember.isEmpty(this.get('model.twitter'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        alert('isValid');
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('friends.show', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill out all the fields');
      }

      return false; // do not bubble up to routes
    },
    cancel: function() {
      console.log('+- cancel action i friends new controller');
      return true;
    }
  }
});
