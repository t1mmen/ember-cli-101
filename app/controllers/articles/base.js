import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  hasNote: Ember.computed.notEmpty('model.note'),
  hasState: Ember.computed.notEmpty('model.state'), // Should be set by model default, including it to see that it validates
  isValid: Ember.computed.and('hasDescription', 'hasNote', 'hasState'),
  // implement action:save here JUST to check validation:
  actions: {
    save: function() {
      if (this.get('isValid')) {
        return true;
      // Invalid? Set error & stop the bubbling to router actions::save
      } else {
        this.set('errorMessage', 'Fill out description & note, please!');
        return false;
      }
    }
  }

});
