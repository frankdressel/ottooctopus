Blockly.JavaScript['object'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
    var value_states = Blockly.JavaScript.valueToCode(block, 'states', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // Using JSON.parse as safer variant of eval.
    let attributesStringRepresentation=value_attributes.replace(/[\[\]]/g, '').split(',').reduce((previous, current) => previous+',\n'+current+' = '+current);
    let statesStringRepresentation=value_states.replace(/[\[\]]/g, '').split('), (').map(e => e.replace(/^ *\(/, '').replace(/\)$/, '')).reduce((previous, current) => previous+',\n'+current);
    let stringRepresentation=`class StatemachineObject {
        state: 'initial',
        ${attributesStringRepresentation},
        transit() {
            return state;
        },
        ${statesStringRepresentation}
    };`;
    var code = stringRepresentation+'\n';
    return code;
};

Blockly.JavaScript['state'] = function(block) {
  var text_statename  = block.getFieldValue('statename');
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    let stringRepresentation=`is${text_statename}(){
       return ${value_condition}; 
    }`;
  var code = stringRepresentation;
  // TODO: Change ORDER_NONE to the correct strength.
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
