import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function() {
      console.log('+--- save action bubbled up to friends route');
      return true;
    },
    cancel: function() {
      console.log('+--- cancel action bubbled to friends route');
      return true;
    },
    delete: function(friend) {
      var _this = this;

      // @todo Echo name of friend here. It's not this.get('friend.full_name')?

      if (confirm('Are you sure you want to delete this friend?')) {
        friend.destroyRecord().then(function() {
          _this.transitionTo('friends.index'); // transitionToRoute if we were in controller
        });
      }
      return false;
    }


  }
});
