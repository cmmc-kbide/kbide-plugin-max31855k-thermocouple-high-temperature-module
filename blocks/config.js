module.exports = [
    {
        name: "MAX31855",
        blocks: [
            {
                xml:
                    `<block type="max31855begin">
                        <value name="csmax31855">
                            <shadow type="math_number">
                                <field name="NUM">19</field>
                            </shadow>
                        </value>
                        <value name="somax31855">
                            <shadow type="math_number">
                                <field name="NUM">18</field>
                            </shadow>
                        </value>
                        <value name="sckmax31855">
                            <shadow type="math_number">
                                <field name="NUM">23</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="readprobe">
                     </block>`
            }
        ]
    }
];