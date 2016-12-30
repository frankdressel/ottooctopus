var toolboxXML='<xml>'+
    '<category name="Variables" colour="#A65C81" custom="VARIABLE"></category>'+
      '<category name="Logic" colour="#5C81A6">'+
        '<block type="controls_if"></block>'+
        '<block type="logic_compare">'+
          '<field name="OP">EQ</field>'+
        '</block>'+
        '<block type="logic_operation">'+
          '<field name="OP">AND</field>'+
        '</block>'+
        '<block type="logic_negate"></block>'+
        '<block type="logic_boolean">'+
          '<field name="BOOL">TRUE</field>'+
        '</block>'+
        '<block type="logic_null"></block>'+
        '<block type="logic_ternary"></block>'+
      '</category>'+
      '<category name="Loops" colour="#5CA65C">'+
        '<block type="controls_repeat_ext">'+
          '<value name="TIMES">'+
            '<shadow type="math_number">'+
              '<field name="NUM">10</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="controls_whileUntil">'+
          '<field name="MODE">WHILE</field>'+
        '</block>'+
        '<block type="controls_for">'+
          '<field name="VAR">i</field>'+
          '<value name="FROM">'+
            '<shadow type="math_number">'+
              '<field name="NUM">1</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="TO">'+
            '<shadow type="math_number">'+
              '<field name="NUM">10</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="BY">'+
            '<shadow type="math_number">'+
              '<field name="NUM">1</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="controls_forEach">'+
          '<field name="VAR">j</field>'+
        '</block>'+
        '<block type="controls_flow_statements">'+
          '<field name="FLOW">BREAK</field>'+
        '</block>'+
      '</category>'+
      '<category name="Math" colour="#5C68A6">'+
        '<block type="math_number">'+
          '<field name="NUM">0</field>'+
        '</block>'+
        '<block type="math_arithmetic">'+
          '<field name="OP">ADD</field>'+
          '<value name="A">'+
            '<shadow type="math_number">'+
              '<field name="NUM">1</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="B">'+
            '<shadow type="math_number">'+
              '<field name="NUM">1</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_single">'+
          '<field name="OP">ROOT</field>'+
          '<value name="NUM">'+
            '<shadow type="math_number">'+
              '<field name="NUM">9</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_trig">'+
          '<field name="OP">SIN</field>'+
          '<value name="NUM">'+
            '<shadow type="math_number">'+
              '<field name="NUM">45</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_constant">'+
          '<field name="CONSTANT">PI</field>'+
        '</block>'+
        '<block type="math_number_property">'+
          '<mutation divisor_input="false"></mutation>'+
          '<field name="PROPERTY">EVEN</field>'+
          '<value name="NUMBER_TO_CHECK">'+
            '<shadow type="math_number">'+
              '<field name="NUM">0</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_round">'+
          '<field name="OP">ROUND</field>'+
          '<value name="NUM">'+
            '<shadow type="math_number">'+
              '<field name="NUM">3.1</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_on_list">'+
          '<mutation op="SUM"></mutation>'+
          '<field name="OP">SUM</field>'+
        '</block>'+
        '<block type="math_modulo">'+
          '<value name="DIVIDEND">'+
            '<shadow type="math_number">'+
              '<field name="NUM">64</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="DIVISOR">'+
            '<shadow type="math_number">'+
              '<field name="NUM">10</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_constrain">'+
          '<value name="VALUE">'+
            '<shadow type="math_number">'+
              '<field name="NUM">50</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="LOW">'+
            '<shadow type="math_number">'+
              '<field name="NUM">1</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="HIGH">'+
            '<shadow type="math_number">'+
              '<field name="NUM">100</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_random_int">'+
          '<value name="FROM">'+
            '<shadow type="math_number">'+
              '<field name="NUM">1</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="TO">'+
            '<shadow type="math_number">'+
              '<field name="NUM">100</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="math_random_float"></block>'+
      '</category>'+
      '<category name="Text" colour="#5CA68D">'+
        '<block type="text">'+
          '<field name="TEXT"></field>'+
        '</block>'+
        '<block type="text_join">'+
          '<mutation items="2"></mutation>'+
        '</block>'+
        '<block type="text_append">'+
          '<field name="VAR">item</field>'+
          '<value name="TEXT">'+
            '<shadow type="text">'+
              '<field name="TEXT"></field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="text_length">'+
          '<value name="VALUE">'+
            '<shadow type="text">'+
              '<field name="TEXT">abc</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="text_isEmpty">'+
          '<value name="VALUE">'+
            '<shadow type="text">'+
              '<field name="TEXT"></field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="text_indexOf">'+
          '<field name="END">FIRST</field>'+
          '<value name="VALUE">'+
            '<block type="variables_get">'+
              '<field name="VAR">text</field>'+
            '</block>'+
          '</value>'+
          '<value name="FIND">'+
            '<shadow type="text">'+
              '<field name="TEXT">abc</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="text_charAt">'+
          '<mutation at="true"></mutation>'+
          '<field name="WHERE">FROM_START</field>'+
          '<value name="VALUE">'+
            '<block type="variables_get">'+
              '<field name="VAR">text</field>'+
            '</block>'+
          '</value>'+
        '</block>'+
        '<block type="text_getSubstring">'+
          '<mutation at1="true" at2="true"></mutation>'+
          '<field name="WHERE1">FROM_START</field>'+
          '<field name="WHERE2">FROM_START</field>'+
          '<value name="STRING">'+
            '<block type="variables_get">'+
              '<field name="VAR">text</field>'+
            '</block>'+
          '</value>'+
        '</block>'+
        '<block type="text_changeCase">'+
          '<field name="CASE">UPPERCASE</field>'+
          '<value name="TEXT">'+
            '<shadow type="text">'+
              '<field name="TEXT">abc</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="text_trim">'+
          '<field name="MODE">BOTH</field>'+
          '<value name="TEXT">'+
            '<shadow type="text">'+
              '<field name="TEXT">abc</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="text_print">'+
          '<value name="TEXT">'+
            '<shadow type="text">'+
              '<field name="TEXT">abc</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="text_prompt_ext">'+
          '<mutation type="TEXT"></mutation>'+
          '<field name="TYPE">TEXT</field>'+
          '<value name="TEXT">'+
            '<shadow type="text">'+
              '<field name="TEXT">abc</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
      '</category>'+
      '<category name="Lists" colour="#745CA6">'+
        '<block type="lists_create_with">'+
          '<mutation items="0"></mutation>'+
        '</block>'+
        '<block type="lists_create_with">'+
          '<mutation items="3"></mutation>'+
        '</block>'+
        '<block type="lists_repeat">'+
          '<value name="NUM">'+
            '<shadow type="math_number">'+
              '<field name="NUM">5</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="lists_length"></block>'+
        '<block type="lists_isEmpty"></block>'+
        '<block type="lists_indexOf">'+
          '<field name="END">FIRST</field>'+
          '<value name="VALUE">'+
            '<block type="variables_get">'+
              '<field name="VAR">list</field>'+
            '</block>'+
          '</value>'+
        '</block>'+
        '<block type="lists_getIndex">'+
          '<mutation statement="false" at="true"></mutation>'+
          '<field name="MODE">GET</field>'+
          '<field name="WHERE">FROM_START</field>'+
          '<value name="VALUE">'+
            '<block type="variables_get">'+
              '<field name="VAR">list</field>'+
            '</block>'+
          '</value>'+
        '</block>'+
        '<block type="lists_setIndex">'+
          '<mutation at="true"></mutation>'+
          '<field name="MODE">SET</field>'+
          '<field name="WHERE">FROM_START</field>'+
          '<value name="LIST">'+
            '<block type="variables_get">'+
              '<field name="VAR">list</field>'+
            '</block>'+
          '</value>'+
        '</block>'+
        '<block type="lists_getSublist">'+
          '<mutation at1="true" at2="true"></mutation>'+
          '<field name="WHERE1">FROM_START</field>'+
          '<field name="WHERE2">FROM_START</field>'+
          '<value name="LIST">'+
            '<block type="variables_get">'+
              '<field name="VAR">list</field>'+
            '</block>'+
          '</value>'+
        '</block>'+
        '<block type="lists_split">'+
          '<mutation mode="SPLIT"></mutation>'+
          '<field name="MODE">SPLIT</field>'+
          '<value name="DELIM">'+
            '<shadow type="text">'+
              '<field name="TEXT">,</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="lists_sort">'+
          '<field name="TYPE">NUMERIC</field>'+
          '<field name="DIRECTION">1</field>'+
        '</block>'+
      '</category>'+
      '<category name="Colour" colour="#A6745C">'+
        '<block type="colour_picker">'+
          '<field name="COLOUR">#ff0000</field>'+
        '</block>'+
        '<block type="colour_random"></block>'+
        '<block type="colour_rgb">'+
          '<value name="RED">'+
            '<shadow type="math_number">'+
              '<field name="NUM">100</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="GREEN">'+
            '<shadow type="math_number">'+
              '<field name="NUM">50</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="BLUE">'+
            '<shadow type="math_number">'+
              '<field name="NUM">0</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
        '<block type="colour_blend">'+
          '<value name="COLOUR1">'+
            '<shadow type="colour_picker">'+
              '<field name="COLOUR">#ff0000</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="COLOUR2">'+
            '<shadow type="colour_picker">'+
              '<field name="COLOUR">#3333ff</field>'+
            '</shadow>'+
          '</value>'+
          '<value name="RATIO">'+
            '<shadow type="math_number">'+
              '<field name="NUM">0.5</field>'+
            '</shadow>'+
          '</value>'+
        '</block>'+
      '</category>'+
      '<sep></sep>'+
      '<category name="Functions" colour="#9A5CA6" custom="PROCEDURE"></category>'+
      '<sep></sep>'+
      '<category name="State machine">'+
      '<block type="object">'+
          '<field name="NAME">object</field>'+
          '<value name="attributes">'+
            '<block type="lists_create_with">'+
              '<mutation items="1"></mutation>'+
              '<value name="ADD0">'+
                '<block type="variables_get">'+
                  '<field name="VAR">a</field>'+
                '</block>'+
              '</value>'+
            '</block>'+
          '</value>'+
          '<value name="states">'+
            '<block type="lists_create_with">'+
              '<mutation items="1"></mutation>'+
              '<value name="ADD0">'+
                '<block type="state">'+
                  '<field name="statename">state name</field>'+
                '</block>'+
              '</value>'+
            '</block>'+
          '</value>'+
        '</block>'+
        '<block type="state">'+
          '<field name="NAME">state name</field>'+
        '</block>'+
        '<block type="current"></block>'+
        '<block type="previous"></block>'+
        '<block type="get"></block>'+
      '</category>'+
    '</xml>'
