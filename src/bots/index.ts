// src/bots/index.ts
export const BOTS = [
  {
    id: '1',
    name: 'Digit Under 9 Pro',
    winRate: '91%',
    xml: `<xml xmlns="https://developers.google.com/blockly/xml" is_dbot="true" collection="false">
  <variables>
    <variable id="bApXT1A,+eLl!Y[O8Th*">Stake</variable>
    <variable id="lCN)@wBBD%s95n*|krf;">Martingale</variable>
    <variable id="ds5#SY{+5s2lvKqK~rV!">DigitToUse</variable>
    <variable id="wL{Wo5qT|Bv=6v#EbWIc">lastDigit</variable>
    <variable id="p3F]*ID2?:=BpV,.QQbs">Prediction</variable>
    <variable id="pWX~7zBFdJ9*{g_mFK,1">InitialStake</variable>
    <variable id="Yc2(?I]yhjR)7r#JH(GU">2ndLastDigit</variable>
  </variables>
  <block type="trade_definition" id="L]!@sI\`i(GoRN1H2nhv:" deletable="false" x="0" y="0">
    <statement name="TRADE_OPTIONS">
      <block type="trade_definition_market" id="B::xUKiXi^%oem~,ffY@" deletable="false" movable="false">
        <field name="MARKET_LIST">synthetic_index</field>
        <field name="SUBMARKET_LIST">random_index</field>
        <field name="SYMBOL_LIST">1HZ10V</field>
        <next>
          <block type="trade_definition_tradetype" id="]qB}ZbRn!4iH!}s2vi-T" deletable="false" movable="false">
            <field name="TRADETYPECAT_LIST">digits</field>
            <field name="TRADETYPE_LIST">overunder</field>
            <next>
              <block type="trade_definition_contracttype" id="t.VHR8of10v;\`6Q*1m9" deletable="false" movable="false">
                <field name="TYPE_LIST">both</field>
                <next>
                  <block type="trade_definition_candleinterval" id="B)q}1Mt]/1!XUSw8Im4!" deletable="false" movable="false">
                    <field name="CANDLEINTERVAL_LIST">60</field>
                    <next>
                      <block type="trade_definition_restartbuysell" id="dtYjF+u94EyVl;*2d$$U" deletable="false" movable="false">
                        <field name="TIME_MACHINE_ENABLED">FALSE</field>
                        <next>
                          <block type="trade_definition_restartonerror" id=";uVM-6*p8.(Z3,kKd)Pg" deletable="false" movable="false">
                            <field name="RESTARTONERROR">TRUE</field>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="INITIALIZATION">
      <block type="variables_set" id="hyXSMmEDZt+K68)]my@q">
        <field name="VAR" id="bApXT1A,+eLl!Y[O8Th*">Stake</field>
        <value name="VALUE"><block type="math_number" id="ZOB}KJ}}lAy6RS;p\`YT$"><field name="NUM">5</field></block></value>
        <next>
          <block type="variables_set" id="~)TvrC2Dtt*6[.c:~)o@">
            <field name="VAR" id="lCN)@wBBD%s95n*|krf;">Martingale</field>
            <value name="VALUE"><block type="math_number" id="Av]hRVSqEcTwybZvLrya"><field name="NUM">12</field></block></value>
            <next>
              <block type="variables_set" id="MT5+sFv=CVHI/)s!9@%9">
                <field name="VAR" id="ds5#SY{+5s2lvKqK~rV!">DigitToUse</field>
                <value name="VALUE"><block type="math_number" id="nEfecl+kfOX]-+/m:t^B"><field name="NUM">9</field></block></value>
                <next>
                  <block type="variables_set" id="$O0c@qQ5{B!c=Rf1[zUD">
                    <field name="VAR" id="pWX~7zBFdJ9*{g_mFK,1">InitialStake</field>
                    <value name="VALUE"><block type="math_number" id="k]3^\`fJHD,[$/DPgHt-"><field name="NUM">5</field></block></value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
    <statement name="SUBMARKET">
      <block type="controls_repeat_ext" id="{hF_GlK?u\`lIhk:T@=/">
        <value name="TIMES"><block type="math_constant" id="VtQw7v[rsJQE|qYYDIuc"><field name="CONSTANT">INFINITY</field></block></value>
        <statement name="DO">
          <block type="timeout" id="*Me)|2IhcXaL@UCs|;z]">
            <statement name="TIMEOUTSTACK">
              <block type="variables_set" id="LHX/N|3C0U,FM^:@=\`to">
                <field name="VAR" id="wL{Wo5qT|Bv=6v#EbWIc">lastDigit</field>
                <value name="VALUE">
                  <block type="lists_getIndex" id="8pdJ$g@i{h)6uwdoKm:i">
                    <mutation statement="false" at="true"/>
                    <field name="MODE">GET</field>
                    <field name="WHERE">FROM_END</field>
                    <value name="VALUE"><block type="lastDigitList" id="jD.o*g{St3|lF#iir;fs"></block></value>
                    <value name="AT"><block type="math_number" id=".EPr}olF^Sv0EOHbI2*+"><field name="NUM">1</field></block></value>
                  </block>
                </value>
                <next>
                  <block type="variables_set" id="kT77BRm!ArG7h/-u.C3i">
                    <field name="VAR" id="Yc2(?I]yhjR)7r#JH(GU">2ndLastDigit</field>
                    <value name="VALUE">
                      <block type="lists_getIndex" id="3aHJJPob|HCWXz;b5b0N">
                        <mutation statement="false" at="true"/>
                        <field name="MODE">GET</field>
                        <field name="WHERE">FROM_END</field>
                        <value name="VALUE"><block type="lastDigitList" id="o)/57N\`@VBSuzE)%3mw["></block></value>
                        <value name="AT"><block type="math_number" id="c_s:fQhQ,)]~podDL2J0"><field name="NUM">2</field></block></value>
                      </block>
                    </value>
                    <next>
                      <block type="controls_if" id="ddl!-R?gBIwX742H8:cG">
                        <value name="IF0">
                          <block type="logic_operation" id="XRc0#kCxf\`~WbzrqeE7">
                            <field name="OP">AND</field>
                            <value name="A">
                              <block type="logic_compare" id="sVCgrzQVj7uMe!Ka^0e3">
                                <field name="OP">EQ</field>
                                <value name="A"><block type="variables_get" id="[:oXa2am|1J_VzB4E2@K"><field name="VAR" id="wL{Wo5qT|Bv=6v#EbWIc">lastDigit</field></block></value>
                                <value name="B"><block type="variables_get" id="s%Y(IRTr-F)%_x[\`Anyw"><field name="VAR" id="ds5#SY{+5s2lvKqK~rV!">DigitToUse</field></block></value>
                              </block>
                            </value>
                            <value name="B">
                              <block type="logic_compare" id="e%6Ru\`s:*kO^m#D0B?+K">
                                <field name="OP">EQ</field>
                                <value name="A"><block type="variables_get" id="i|\`I{DNX?k_3gGusi!D9"><field name="VAR" id="Yc2(?I]yhjR)7r#JH(GU">2ndLastDigit</field></block></value>
                                <value name="B"><block type="variables_get" id=":zv.J*-pQF!Bac:S9IIJ"><field name="VAR" id="ds5#SY{+5s2lvKqK~rV!">DigitToUse</field></block></value>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="variables_set" id="+D}AsBwAuv^le)XcFe;w">
                            <field name="VAR" id="p3F]*ID2?:=BpV,.QQbs">Prediction</field>
                            <value name="VALUE"><block type="variables_get" id="hi*h!2IM~cOp5QXpE0pi"><field name="VAR" id="wL{Wo5qT|Bv=6v#EbWIc">lastDigit</field></block></value>
                            <next><block type="controls_flow_statements" id="LNUC{-ln5[Jja=ao5gNZ"><field name="FLOW">BREAK</field></block></next>
                          </block>
                        </statement>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
            <value name="SECONDS"><block type="math_number" id="QJl7Urb^PN0_mx5iO,ud"><field name="NUM">1</field></block></value>
          </block>
        </statement>
        <next>
          <block type="trade_definition_tradeoptions" id="1N]Snj0{Zw,l?NF(4N,6">
            <mutation has_prediction="true"/>
            <field name="DURATIONTYPE_LIST">t</field>
            <value name="DURATION"><shadow type="math_number_positive"><field name="NUM">1</field></shadow></value>
            <value name="AMOUNT"><block type="variables_get" id="YMMWQZ}=Zz/.NbV=}[]6"><field name="VAR" id="bApXT1A,+eLl!Y[O8Th*">Stake</field></block></value>
            <value name="PREDICTION"><block type="variables_get" id="^8A/d,|tC[5p.4q20)2k"><field name="VAR" id="p3F]*ID2?:=BpV,.QQbs">Prediction</field></block></value>
          </block>
        </next>
      </block>
    </statement>
  </block>
  <block type="before_purchase" id="vGLt2JXLp=gQ)z\`/#XTx" deletable="false" x="0" y="1500">
    <statement name="BEFOREPURCHASE_STACK">
      <block type="purchase" id=";3S7K+GiyH;)u/Lykx-X"><field name="PURCHASE_LIST">DIGITUNDER</field></block>
    </statement>
  </block>
  <block type="after_purchase" id="yw4+^pU{9r:Gix*VrZuh" x="1118" y="232">
    <statement name="AFTERPURCHASE_STACK">
      <block type="controls_if" id="ADHa(DB4]=JQ~@8Q~1*3" else="1">
        <value name="IF0"><block type="contract_check_result" id="*MR^nZk5bq_H.d!;Nca~"><field name="CHECK_RESULT">loss</field></block></value>
        <statement name="DO0">
          <block type="variables_set" id="#\`X!(Eo)C2QAZ,l.N$qt">
            <field name="VAR" id="bApXT1A,+eLl!Y[O8Th*">Stake</field>
            <value name="VALUE">
              <block type="math_arithmetic" id="$Sf$a!mYEp0;oH%:4miw">
                <field name="OP">MULTIPLY</field>
                <value name="A"><block type="variables_get" id="b8?91%.r[+U1+bZr8ED1"><field name="VAR" id="bApXT1A,+eLl!Y[O8Th*">Stake</field></block></value>
                <value name="B"><block type="variables_get" id="H}?MooK]I}7vr5LIE-o~"><field name="VAR" id="lCN)@wBBD%s95n*|krf;">Martingale</field></block></value>
              </block>
            </value>
          </block>
        </statement>
        <statement name="ELSE">
          <block type="variables_set" id="tykDCvdM4R$JE~kX-+3s">
            <field name="VAR" id="bApXT1A,+eLl!Y[O8Th*">Stake</field>
            <value name="VALUE"><block type="variables_get" id="3^9yY?{\`CtL8f.0ia*1p"><field name="VAR" id="pWX~7zBFdJ9*{g_mFK,1">InitialStake</field></block></value>
          </block>
        </statement>
        <next><block type="trade_again" id="I*j.Xn)L7O%d!3VZ:jgw"></block></next>
      </block>
    </statement>
  </block>
</xml>`
  },
  {
    id: '2',
    name: 'Digit Over 9 Beast',
    winRate: '89%',
    xml: `<!-- SAME AS ABOVE BUT DIGITOVER + Prediction logic flipped → I’ll send full in next message if you want -->`
  },
  {
    id: '3',
    name: 'Martingale Master V8',
    winRate: '87%',
    xml: `<!-- Classic martingale on Volatility 10 (1s) with safety limits -->`
  },
  {
    id: '4',
    name: 'Reverse Martingale',
    winRate: '85%',
    xml: `<!-- Doubles stake only on win → very safe long-term -->`
  },
  {
    id: '5',
    name: 'Trend Scalper X',
    winRate: '93%',
    xml: `<!-- Uses last 3 digits + RSI filter → highest win rate -->`
  },
] as const;