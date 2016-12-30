import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        transit(){
            this.get('transit')();
        }
    }
});
