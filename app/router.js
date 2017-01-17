import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('workspaces');
  this.route('workspace', { path: '/:workspace_id' });
});

export default Router;
