import Ember from 'ember';

export default Ember.Component.extend({
    actions:{
        change(key){
            this.get('machine').set(key, arguments[1]); 
        },
        transit() {
            let historical=Ember.get(this, 'historical');
            if(!historical){
                historical=Ember.A([]);
                Ember.set(this, 'historical', historical);
            }
            let statemachine=Ember.get(this, 'machine');
            statemachine.transit();
            let newLine=statemachine.getAttributes().reduce((previous, propertyName) => {previous[propertyName]=statemachine.get(propertyName); return previous}, {});
            Ember.set(this, 'statemachineValues', newLine);
            historical.pushObject(newLine);
        }
    }
});
