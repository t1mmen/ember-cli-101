import DS from 'ember-data';
//import Ember from 'ember';

export default DS.Model.extend({
  articles: DS.hasMany('article', { async: true }),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: function(key,value,oldValue) {

    // as getter:
    if (arguments.length === 1) {
      return this.get('firstName') + ' ' + this.get('lastName');

    // as setter:
    // see book loc 2660
    // Probably shouldn't do this, though, ref: https://github.com/emberjs/ember.js/issues/9290
    } else {
      var name = value.split(' ');

      this.set('firstName', name[0]);
      this.set('lastName', name[1]);

      return value;
    }

  }.property('firstName', 'lastName'),
  // Alternative syntax:
  // fullName: Ember.computed('firstName', 'lastName', function() {
  //   return this.get('firstName') + ' ' + this.get('lastName');
  // })
});
