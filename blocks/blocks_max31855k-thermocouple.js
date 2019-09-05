Blockly.Blocks['max31855begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("MAX31855K",null,["Plugin.MAX31855"], ["Plugin.MAX31855"]), "MAX31855K")
        .appendField("begin");
    this.appendValueInput("csmax31855")
        .setCheck("Number")
        .appendField("CS");
    this.appendValueInput("somax31855")
        .setCheck("Number")
        .appendField("SO");
    this.appendValueInput("sckmax31855")
        .setCheck("Number")
        .appendField("SCK");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['readprobe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("MAX31855K",null,["Plugin.MAX31855"], ["Plugin.MAX31855"]), "MAX31855K")
        .appendField("read");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
 this.setTooltip("");
 this.setHelpUrl("");
  }
};