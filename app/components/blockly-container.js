import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        this._super(...arguments);
        var workspace = Blockly.inject('blocklyDiv', {toolbox: toolboxXML});
        console.log('Hallo');
    }
});
