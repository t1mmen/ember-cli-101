import Ember from 'ember';
//import DS from 'ember-data';
import request from 'ic-ajax';

export default Ember.Route.extend({
  model: function() {

    // timm going off the grid:
    // 1: read DS.ActiveModelAdapter's host key somehow.
    // 2: set as url
    // 3: use url in request() below.

    // original
    return request('http://api.ember-cli-101.com/api/friends').then(function(data) {
      return {
        friendsCount : data.friends.length
      };
    });
  }
});
