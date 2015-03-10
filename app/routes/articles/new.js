import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('article', {
      // state: 'borrowed', // see default value in models/article.js's state definition
      friend: this.modelFor('friends/show')
    });
  },
  actions: {
    save: function() {
      var _this = this;
      var model = this.modelFor('articles/new');

      model.save().then(function() {
        _this.transitionTo('articles');
      });
    },
    cancel: function() {
      this.transitionTo('article');
    }
  }
});
