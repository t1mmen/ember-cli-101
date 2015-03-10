import Ember from 'ember';

export default Ember.Controller.extend({

  // Validation
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail', 'hasFirstName', 'hasLastName', 'hasTwitter'
  ),

  // Phased out for above code:
  //
  // isValid: Ember.computed(
  //   'model.email',
  //   'model.firstName',
  //   'model.lastName',
  //   'model.twitter',
  //   function() {
  //     return !Ember.isEmpty(this.get('model.email')) &&
  //       !Ember.isEmpty(this.get('model.firstName')) &&
  //       !Ember.isEmpty(this.get('model.lastName')) &&
  //       !Ember.isEmpty(this.get('model.twitter'));
  //   }
  // ),

  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(friend) {
          _this.transitionToRoute('articles', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill out all required fields');
      }
      return false;
    },
    cancel: function() {
      return true;
    }
  }
});
