import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        this._super(...arguments);
        this.model.workspace = Blockly.inject('blocklyDiv', {toolbox: toolboxXML});
    }
});
