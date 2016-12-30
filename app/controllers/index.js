import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        generate() {
            var code = Blockly.JavaScript.workspaceToCode(this.model.workspace);
            console.log(code);
        }
    }
});
