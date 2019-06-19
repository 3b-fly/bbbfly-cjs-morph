/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ContentPanel = function(def,ref,parent){
  bbbfly.morph.misc.ApplyShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'ContentPanel');
  return ngCreateControlAsType(def,'bbbfly.Panel',ref,parent);
};
bbbfly.morph.ContentFrame = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'ContentFrame');
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};
bbbfly.morph.InputFrame = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'InputFrame');
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};
bbbfly.morph.ContentSeparator = function(def,ref,parent){
  bbbfly.morph.misc.ApplyFrameShade(def);
  bbbfly.morph.misc.ApplyClassName(def,'ContentSeparator');
  return ngCreateControlAsType(def,'bbbfly.Line',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_panel'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentPanel',bbbfly.morph.ContentPanel
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentFrame',bbbfly.morph.ContentFrame
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.InputFrame',bbbfly.morph.InputFrame
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentSeparator',bbbfly.morph.ContentSeparator
    );
  }
};