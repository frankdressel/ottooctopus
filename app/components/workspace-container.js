import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
    workspaces: storageFor('workspaces'),
    didInsertElement() {
        this._super(...arguments);

        var blocklyDiv = document.getElementById('blocklyDiv');
        this.model.workspaceInstance = Blockly.inject(blocklyDiv, {
            toolbox: toolboxXML,
            grid: {
                spacing: 20,
                length: 3,
                colour: '#ccc',
                snap: true
            },
            zoom: {
                wheel: true,
            }
        });
        var xml = Blockly.Xml.textToDom(this.model.get('workspace'));
        Blockly.Xml.domToWorkspace(xml, this.model.workspaceInstance);
    },
    actions: {
        saveRecord(){
            this.model.set('workspace', Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.model.workspaceInstance)));
            this.model.set('date', new Date());
            this.model.save();
        },
        delete(){
            this.model.deleteRecord();
            this.model.save();

        }
    }
});
