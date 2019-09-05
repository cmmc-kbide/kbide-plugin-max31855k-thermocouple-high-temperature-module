Blockly.JavaScript['max31855begin'] = function(block) {
  var variable_max31855k = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MAX31855K'), Blockly.Variables.NAME_TYPE);
  var value_csmax31855 = Blockly.JavaScript.valueToCode(block, 'csmax31855', Blockly.JavaScript.ORDER_ATOMIC);
  var value_somax31855 = Blockly.JavaScript.valueToCode(block, 'somax31855', Blockly.JavaScript.ORDER_ATOMIC);
  var value_sckmax31855 = Blockly.JavaScript.valueToCode(block, 'sckmax31855', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
      var code =
      `
#EXTINC#include <MAX31855.h>#END

#VARIABLE
MAX31855_Class ${variable_max31855k};
#END
${variable_max31855k}.begin(${value_csmax31855},${value_somax31855},${value_sckmax31855});
\n
`;
  return code;
};
Blockly.JavaScript['readprobe'] = function(block) {
  var variable_max31855k = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MAX31855K'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `(float)${variable_max31855k}.readProbe()/1000`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};