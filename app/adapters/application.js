import DS from 'ember-data';

//export default DS.RESTAdapter.extend({

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v2',
  host: 'http://api.ember-cli-101.com',
});
