/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ContentGrid = function(def,ref,parent){
  def = def || {};

  bbbfly.morph.misc.ApplyControlClassName(def,'ContentGrid');
  return ngCreateControlAsType(def,'bbbfly.Grid',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_grid'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentGrid',bbbfly.morph.ContentGrid
    );
  }
};
