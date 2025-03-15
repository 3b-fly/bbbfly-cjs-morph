/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ContentInputBar = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'ContentInputBar');
  return ngCreateControlAsType(def,'bbbfly.Bar',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_bar'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentInputBar',bbbfly.morph.ContentInputBar
    );
  }
};
