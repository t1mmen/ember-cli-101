import Ember from 'ember';

export default Ember.Route.extend({
  // queryParams: ['show'], // Uncaught Error: Assertion Failed: You passed in `["show"]` as the value for `queryParams` but `queryParams` cannot be an Array
  // ref loc 1627 in book
  possibleStates: ['borrowed', 'returned'],
  model: function() {
    return this.modelFor('friends/show').get('articles');
  }
});
