import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var articles = this.modelFor('friends.show').get('articles');

    // Force reload of articles if they've been fetched before
    // for this friend.
    if (articles.get('isFulfilled')) {
      articles.reload();
    }

    return articles;

  },
  actions: {
    save: function(model) {
      model.save();
      return false; // no bubblies!
    }
  }
});
