import Ember from 'ember';

export default Ember.Component.extend({
    ui: 'both',
    actions: {
        generate() {
            var code = '(function(){\n'+
            '    var state=\'initial\';\n'+
            '    '+Blockly.JavaScript.workspaceToCode(this.model.get('workspaceInstance'))+'\n'+
            '    var machine=new MachineObject();\n'+
            '    return {\n'+
            '        transit(){\n'+
            '            if(typeof pretransit !== \'undefined\') {pretransit();}\n'+
            '            machine.transit();\n'+    
            '            if(typeof posttransit !== \'undefined\') {posttransit();}\n'+
            '        },\n'+
            '        evaluateScript(){\n'+
            '            return evaluate();\n'+
            '        },\n'+
            '        set(key, value){eval(key+\'=\'+JSON.stringify(value));},\n'+
            '        get(key){return eval(\'"use strict";\'+key);},\n'+
            '        getFilters(){return eval(\'"use strict";\'+key);},\n'+
            '        getIndex(key, index){return eval(\'"use strict";\'+key+\'[\'+index+\']\');},\n'+
            '        getAttributes(){return machine.attributes;},\n'+
            '        isListMode(){return machine.isListMode();}\n'+
            '    }\n'+
            '})()';
            console.log(code);
            let machine=eval(code);

            let MachineValues=Ember.Object.extend();
            machine.getAttributes().forEach(attr=>{
                let newObj={};
                newObj[attr]=null;
                MachineValues.reopen(newObj);
            });

            let MachineWrapper=Ember.Object.extend({
                init(){
                    this._super(...arguments); 
                },
                attributes: Ember.computed(function(){
                    return this.machine.getAttributes();
                }),
                isListMode: Ember.computed(function(){
                    return this.machine.isListMode();
                }),
                listValues: Ember.computed(...machine.getAttributes, {
                    get(key){
                        let listValues=Ember.A([]);
                        if(machine.getAttributes().length&&machine.getAttributes().length>0&&machine.get(machine.getAttributes()[0]).length){
                            for(var index =0; index < machine.get(machine.getAttributes()[0]).length; index++){
                                let row=MachineValues.create();
                                listValues.pushObject(machine.getAttributes().reduce((prev, current)=>{
                                    prev.set(current, machine.getIndex(current, index));
                                    return prev;
                                }, row));
                            }
                        }
                        return listValues;
                    },
                    set(key, value){
                        machine.getAttributes().forEach(attr=>machine.set(attr, []));
                        value.forEach(row=>{
                            machine.getAttributes().forEach(attr=>machine.get(attr).push(row.get(attr)));
                        });
                        return value;
                    }
                })
            });
            machine.getAttributes().forEach(attr=>{
                let newAttribute={};
                newAttribute[attr]=function(key, value, oldValue){
                    // setter
                    if (arguments.length > 1) {
                        this.machine.set(attr, value);
                    }

                    // getter
                    return this.machine.get(attr);
                }.property()
            });
            let myMachine=MachineWrapper.create({machine: machine});

            Ember.set(this.model, 'myMachine', myMachine);
            let historical=Ember.A([]);
            let listMode=machine.isListMode();
            if(listMode){
            }
            else{
                Ember.set(this.model, 'historical', historical);
            }
        },
        saveRecord(){
            this.model.set('workspace', Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.model.workspaceInstance)));
            this.model.set('date', new Date());
            this.model.save();
        },
        delete(){
            this.model.deleteRecord();
            this.model.save();
        },
        switchUI(){
            let possibilities=['definition', 'evaluation', 'both'];
            let newUIIndex=(possibilities.indexOf(this.get('ui'))+1)%possibilities.length;
            this.set('ui', possibilities[newUIIndex]);
            if(this.get('ui')=='definition'){
                this.set('showDefinition', true);
                this.set('showEvaluation', false);
            }
            if(this.get('ui')=='evaluation'){
                this.set('showDefinition', false);
                this.set('showEvaluation', true);
            }
            if(this.get('ui')=='both'){
                this.set('showDefinition', false);
                this.set('showEvaluation', false);
            }
        }
    }
});
