import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  sortBy: 'firstName',
  actions: {
    setSortBy: function(fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending'); // toggles boolean properties

      console.log('sortBy now', fieldName);
      console.log('sortBy asc?', this.get('sortAscending'));

      return false; // abort bubbling
    }
  }
});
