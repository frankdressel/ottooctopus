import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        change(key){
            this.get('statemachine').set(key, arguments[1]); 
        }
    }
});
