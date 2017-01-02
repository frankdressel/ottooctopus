import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        generate() {
            var code = Blockly.JavaScript.workspaceToCode(this.model.workspace)+`function create(){return new StatemachineObject();}`;
            console.log(code);
            var geval = eval;
            geval(code);
            Ember.set(this.model, 'statemachine', create());
            console.log(Object.getOwnPropertyNames(this.model.statemachine));
        },
        transit() {
            let historical=Ember.get(this.model, 'historical');
            if(!historical){
                historical=Ember.A([]);
                Ember.set(this.model, 'historical', historical);
            }
            let statemachine=Ember.get(this.model, 'statemachine');
            statemachine.transit();
            let newLine=statemachine.attributes.reduce((previous, propertyName) => {previous[propertyName]=statemachine[propertyName]; return previous}, {});
            historical.pushObject(newLine);
        }
    }
});
