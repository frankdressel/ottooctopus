import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
    workspaces: storageFor('workspaces'),
    didInsertElement() {
        this._super(...arguments);

        var blocklyArea = document.getElementById('blocklyArea');
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
        var onresize = function(e) {
            // Compute the absolute coordinates and dimensions of blocklyArea.
            var element = blocklyArea;
            var x = 0;
            var y = 0;
            do {
                x += element.offsetLeft;
                y += element.offsetTop;
                element = element.offsetParent;
            } while (element);
            // Position blocklyDiv over blocklyArea.
            blocklyDiv.style.left = x + 'px';
            blocklyDiv.style.top = y + 'px';
            blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
            blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
        };
        var xml = Blockly.Xml.textToDom(this.model.get('workspace'));
        Blockly.Xml.domToWorkspace(xml, this.model.workspaceInstance);
        window.addEventListener('resize', onresize, false);
        onresize();
        Blockly.svgResize(this.model.workspaceInstance);
    },
    actions: {
        saveRecord(){
            this.model.set('workspace', Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.model.workspaceInstance)));
            this.model.save();
        },
        delete(){
            this.model.deleteRecord();
            this.model.save();

        }
    }
});
