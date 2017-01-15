import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createNew(name) {
            let newModel= this.get('store').createRecord('workspace', {name: name, xml: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'});
            newModel.save();
            this.set('model', this.get('store').findAll('workspace'))
        }
    }
});
