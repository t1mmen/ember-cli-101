import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: ['show'],
  possibleStates: ['borrowed', 'returned'],
  model: function() {
    return this.modelFor('friends/show').get('articles');
  }
});
