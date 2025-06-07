/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.Edit = function(def){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      HintDef: {
        Type: 'bbbfly.morph.TextHint'
      }
    }
  });

  return def;
};
bbbfly.morph.EditBox = function(def,ref,parent){
  def = bbbfly.morph.Edit(def);

  bbbfly.morph.misc.ApplyControlClassName(def,'EditBox');
  return ngCreateControlAsType(def,'bbbfly.EditBox',ref,parent);
};
bbbfly.morph.DropDownBox = function(def,ref,parent){
  def = bbbfly.morph.Edit(def);

  bbbfly.morph.misc.ApplyControlClassName(def,'DropDownBox');
  return ngCreateControlAsType(def,'bbbfly.DropDownBox',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_edit'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.EditBox',bbbfly.morph.EditBox
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.DropDownBox',bbbfly.morph.DropDownBox
    );
  }
};
