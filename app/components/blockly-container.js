import Ember from 'ember';

export default Ember.Component.extend({
    didUpdateAttrs(){
        Blockly.svgResize(this.model.workspaceInstance);
    },
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
    }
});
