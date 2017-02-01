Blockly.Blocks['object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("object"), "NAME");
    this.appendValueInput("attributes")
        .setCheck("Array")
        .appendField("attributes");
    this.appendValueInput("states")
        .setCheck("Array")
        .appendField("states");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['state'] = {
  init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldTextInput('state name'), 'statename')
          .appendField(':');
      this.appendValueInput('condition')
          .setCheck('Boolean');
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(330);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['sumover'] = {
  init: function() {
      this.appendDummyInput()
          .appendField('sum');
      this.appendValueInput('index')
          .setCheck('Array')
          .appendField('over index');
      this.appendValueInput('list')
          .setCheck('Array')
          .appendField('in list');
      this.setInputsInline(true);
      this.setOutput(true, 'Number');
      this.setColour(230);
      this.setTooltip('');
      this.setHelpUrl('');
    }
};

Blockly.Blocks['filteredindex'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('index');
        this.appendValueInput('list')
            .setCheck('Array')
            .appendField('in list');
        this.setInputsInline(true);
        this.setOutput(true, 'Array');
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
}

Blockly.Blocks['filteredindex_stack'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
          .appendField('combine');
    this.setColour(Blockly.Blocks.lists.HUE);
    this.itemCount_ = 1;
    this.updateShape_();
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['filteredindex_item']));
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('filteredindex_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('filteredindex_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField(Blockly.Msg.LISTS_CREATE_EMPTY_TITLE);
    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i);
        input.setCheck('Array');  
        if (i == 0) {
          input.appendField(Blockly.Msg.filteredindex_INPUT_WITH);
        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};

Blockly.Blocks['filteredindex_container'] = {
  /**
   * Mutator block for list container.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField('filter container');
    this.appendStatementInput('STACK');
    this.contextMenu = false;
  }
};

Blockly.Blocks['filteredindex_item'] = {
  /**
   * Mutator block for adding items.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Blocks.lists.HUE);
    this.appendDummyInput()
        .appendField('filter item');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};
