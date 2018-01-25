import Ember from 'ember';
const { Route, inject } = Ember;

export default Route.extend({
  metrics: inject.service(),

  activate() {
    this._super(...arguments);
    this.get('metrics').trackEvent({ 'event': 'Home Page' });
  }
});
