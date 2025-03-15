/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.Text = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'Text');
  return ngCreateControlAsType(def,'bbbfly.Text',ref,parent);
};
bbbfly.morph.Text.LineHeight = 20;
bbbfly.morph.Label = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: { Selectable: false }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,'Label');
  return ngCreateControlAsType(def,'bbbfly.Text',ref,parent);
};
bbbfly.morph.Label.LineHeight = 28;
bbbfly.morph.Title = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      TextAlign: bbbfly.Text.textalign.center,
      Selectable: false
    }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,'Title');
  return ngCreateControlAsType(def,'bbbfly.Text',ref,parent);
};
bbbfly.morph.Title.LineHeight = 28;
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_text'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.Text',bbbfly.morph.Text
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.Label',bbbfly.morph.Label
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.Title',bbbfly.morph.Title
    );
  }
};
