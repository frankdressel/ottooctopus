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
          .appendField(new Blockly.FieldTextInput("state name"), "statename")
          .appendField(":");
      this.appendValueInput("condition")
          .setCheck("Boolean");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(330);
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['current'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("current");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['get'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(["previous", "current"]);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField(".");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['previous'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("previous");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
