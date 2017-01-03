Blockly.JavaScript['object'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
    var value_states = Blockly.JavaScript.valueToCode(block, 'states', Blockly.JavaScript.ORDER_ATOMIC);
    // Using JSON.parse as safer variant of eval.
    let attributesAssignmentString=value_attributes.replace(/[\[\]]/g, '').split(',').map(e => 'this.'+e+'='+e+';').reduce((previous, current) => previous+'\n'+current);
    let attributesString=value_attributes.replace(/[\[\]]/g, '').split(',').map(e => '\''+e+'\'').reduce((previous, current) => previous+',\n'+current);
    let statesString=value_states.replace(/[\[\]]/g, '').split('), (').map(e => e.replace(/^ *\(/, '').replace(/\)$/, '')).reduce((previous, current) => previous+',\n'+current);
    let stringRepresentation=`class StatemachineObject {
        constructor() {
            this.attributes=['state', ${attributesString}];
            this.states = {${statesString}}
        }
        transit(){
            for(var st in this.states){
                if(this.states[st]()){
                    state=st;
                    break;
                }
            }
        }
    }
    `;
    var code = stringRepresentation+'\n';
    return code;
};

Blockly.JavaScript['state'] = function(block) {
  var text_statename  = block.getFieldValue('statename');
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    let name=(text_statename.charAt(0).toUpperCase() + text_statename.slice(1)).replace(/ /g, '_');
    let stringRepresentation='"'+name+'"'+`:function(){
       return ${value_condition}; 
    }`;
  var code = stringRepresentation;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['current'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['previous'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
