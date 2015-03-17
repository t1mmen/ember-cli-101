import DS from 'ember-data';

//export default DS.RESTAdapter.extend({

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v4',
  host: 'http://api.ember-cli-101.com',
  coalesceFindRequests:true, // Combine finds to async relationships
  // namespace: 'cakephp-ember-backend/myapp',
  // host: 'http://localhost',
});
