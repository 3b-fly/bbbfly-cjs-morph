/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.EditBox = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      HintDef: {
        Type: 'bbbfly.morph.TextHint'
      }
    }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,'EditBox');
  return ngCreateControlAsType(def,'bbbfly.EditBox',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_edit'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.EditBox',bbbfly.morph.EditBox
    );
  }
};
