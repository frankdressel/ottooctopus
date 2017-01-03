import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        generate() {
            var code = '(function(){\n'+
            '    '+Blockly.JavaScript.workspaceToCode(this.model.workspace)+'\n'+
            '    var statemachine=new StatemachineObject();\n'+
            '    return {\n'+
            '        transit(){\n'+
            '            statemachine.transit();\n'+    
            '        },\n'+
            '        set(key, value){eval(key+\'=\'+value);},\n'+
            '        get(key){return eval(key);},\n'+
            '        getAttributes(){return statemachine.attributes;}\n'+
            '    }\n'+
            '})()';
            console.log(code);
            var statemachine=eval(code);
            console.log(statemachine.getAttributes());
            Ember.set(this.model, 'statemachine', statemachine);
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
