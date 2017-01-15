import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
    workspaces: storageFor('workspaces'),
    store: Ember.inject.service(),
    didInsertElement() {
        this._super(...arguments);

        var blocklyArea = document.getElementById('blocklyArea');
        var blocklyDiv = document.getElementById('blocklyDiv');
        this.model.workspace = Blockly.inject(blocklyDiv, {
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
        window.addEventListener('resize', onresize, false);
        onresize();
        Blockly.svgResize(this.model.workspace);

//        window.setTimeout(BlocklyStorage.restoreBlocks, 0);
//        BlocklyStorage.backupOnUnload();
    },
    actions: {
        saveRecord(){
            console.log(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.model.workspace)));
        },
        clear(){
            this.get('workspaces').clear();
        },
        load(){
            console.log(JSON.parse(window.localStorage['storage:workspaces'])[0]);
            var xml = Blockly.Xml.textToDom(JSON.parse(window.localStorage['storage:workspaces'])[0].xml);
            Blockly.Xml.domToWorkspace(xml, this.model.workspace);
        }
    }
});
