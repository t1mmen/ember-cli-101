import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['show'],
  possibleStates: ['borrowed', 'returned'],
  contentDidChange: function() {
    console.log('Called when we add or remove an article');
  }.observes('model.[]'),
  stateDidChange: function() {
    console.log('Called when state changed on article');
  }.observes('model.@each.state')
});
