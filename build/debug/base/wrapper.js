/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ContentWrapper = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'ContentWrapper');
  return ngCreateControlAsType(def,'bbbfly.Wrapper',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_wrapper'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentWrapper',bbbfly.morph.ContentWrapper
    );
  }
};
