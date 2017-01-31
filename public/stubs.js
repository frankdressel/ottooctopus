Blockly.JavaScript['object'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_attributes = Blockly.JavaScript.valueToCode(block, 'attributes', Blockly.JavaScript.ORDER_ATOMIC);
    var value_states = Blockly.JavaScript.valueToCode(block, 'states', Blockly.JavaScript.ORDER_ATOMIC);
    // Using JSON.parse as safer variant of eval.
    let attributesAssignmentString=value_attributes.replace(/[\[\]]/g, '').split(',').map(e => 'this.'+e+'='+e+';').reduce((previous, current) => previous+'\n'+current);
    let attributesString=value_attributes.replace(/[\[\]]/g, '').split(',').map(e => '\''+e+'\'').reduce((previous, current) => previous+',\n'+current);
    let statesString=value_states.replace(/[\[\]]/g, '').split('), (').map(e => e.replace(/^ *\(/, '').replace(/\)$/, '')).reduce((previous, current) => previous+',\n'+current);
    let stringRepresentation=`class MachineObject {
        constructor() {
            // List mode: There is no state.
            if([${attributesString}].reduce((prev, attr) => prev&&(eval('Array.isArray('+attr+')')), true)){
                this.attributes=[${attributesString}];
            }
            // Staate machine mode: State variable injected.
            else{
                this.attributes=['state', ${attributesString}];
            }
            this.rawAttributes=[${attributesString}];
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
        isListMode(){
            return [${attributesString}].reduce((prev, attr) => prev&&(eval('Array.isArray('+attr+')')), true);
        }
    }
    `;
    var code = stringRepresentation+'\n';
    return code;
};

Blockly.JavaScript['state'] = function(block) {
    var text_statename  = block.getFieldValue('statename');
    var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);

    let name=(text_statename.charAt(0).toUpperCase() + text_statename.slice(1)).replace(/ /g, '_');
    let stringRepresentation='"'+name+'"'+`:function(){
        return ${value_condition}; 
    }`;
    var code = stringRepresentation;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sumover'] = function(block) {
    var value_index = Blockly.JavaScript.valueToCode(block, 'index', Blockly.JavaScript.ORDER_ATOMIC);
    var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `${value_index}.length>0?${value_index}.reduce((prev, ind)=>prev+parseFloat(${value_list}[ind]), 0):null`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['filteredindex'] = function(block) {
    var value_list = Blockly.JavaScript.valueToCode(block, 'list', Blockly.JavaScript.ORDER_ATOMIC);

    var code = `${value_list}.map((val, index)=>{
        if(typeof ${value_list}_filter!='undefined'&&${value_list}_filter!=null&&val==${value_list}_filter){
            return index;
        }
        if(typeof ${value_list}_filter=='undefined'||${value_list}_filter==null){
            return index;
        }
        return null;
    }).filter(ind=>ind!=null)`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['filteredindex_stack'] = function(block) {
    var elements = new Array(block.itemCount_);
    for (var i = 0; i < block.itemCount_; i++) {
        elements[i] = Blockly.JavaScript.valueToCode(block, 'ADD' + i,
            Blockly.JavaScript.ORDER_COMMA) || 'null';
    }
    var code = 'Object.entries([' + elements.join(', ') + '].reduce((prev, cur)=>{cur.forEach(e=>prev[e]=prev[e]&&(prev[e]+1)||1); return prev;}, {})).filter(kv=>kv[1]=='+elements.length+').map(kv=>kv[0])';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}
