import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  total_articles: DS.attr('number'),
  full_name: Ember.computed('first_name', 'last_name', function() {
    return this.get('first_name') + ' ' + this.get('last_name');
  })
});
