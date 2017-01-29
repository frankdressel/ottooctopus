import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveRecord(){
            let record=this.get('store').createRecord('workspace', {xml: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.model.workspace))});
            record.save();
        },
        generate() {
            var code = '(function(){\n'+
            '    var state=\'initial\';\n'+
            '    '+Blockly.JavaScript.workspaceToCode(this.model.workspace)+'\n'+
            '    var statemachine=new StatemachineObject();\n'+
            '    return {\n'+
            '        transit(){\n'+
            '            if(typeof pretransit !== \'undefined\') {pretransit();}\n'+
            '            statemachine.transit();\n'+    
            '            if(typeof posttransit !== \'undefined\') {posttransit();}\n'+
            '        },\n'+
            '        set(key, value){eval(key+\'=\'+value);},\n'+
            '        get(key){return eval(\'"use strict";\'+key);},\n'+
            '        getAttributes(){return statemachine.attributes;}\n'+
            '    }\n'+
            '})()';
            console.log(code);
            var statemachine=eval(code);
            console.log(statemachine.getAttributes());
            Ember.set(this.model, 'machine', statemachine);
            console.log(statemachine.getAttributes());
            Ember.set(this.model, 'attributes', statemachine.getAttributes());
            let historical=Ember.A([]);
            Ember.set(this.model, 'historical', historical);
        },
        transit() {
            let historical=Ember.get(this.model, 'historical');
            if(!historical){
                historical=Ember.A([]);
                Ember.set(this.model, 'historical', historical);
            }
            let statemachine=Ember.get(this.model, 'machine');
            statemachine.transit();
            let newLine=statemachine.getAttributes().reduce((previous, propertyName) => {previous[propertyName]=statemachine.get(propertyName); return previous}, {});
            Ember.set(this.model, 'statemachineValues', newLine);
            historical.pushObject(newLine);
        }
    }
});
