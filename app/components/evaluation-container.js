import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        transit(){
            this.get('transit')();
        }
        change(key, value){
            this.set('statemachine', key, value); 
        }
    }
});
