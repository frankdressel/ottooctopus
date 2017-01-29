import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
    model(){
        return this.store.findRecord('workspace', params.workspace_id);
    }
});
