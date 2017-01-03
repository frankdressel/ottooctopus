import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        transit(){
            this.get('transit')();
        },
        change(key){
            this.get('statemachine').set(key, arguments[1]); 
        }
    }
});
