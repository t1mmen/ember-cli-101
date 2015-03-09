import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('friends');
      return false; // do not bubble up to routes
    }
  }
});
