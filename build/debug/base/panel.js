/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.line = {};
bbbfly.morph.line._getFrame = function(){
  var frame = this.GetFrame.callParent();

  if(Object.isObject(frame)){
    switch(this.Orientation){
      case bbbfly.Line.orientation.horizontal:
        frame = frame.Horizontal;
      break;
      case bbbfly.Line.orientation.vertical:
        frame = frame.Vertical;
      break;
    }
  }

  return Object.isObject(frame) ? frame : {};
};
bbbfly.morph.ContentPanel = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'ContentPanel');
  return ngCreateControlAsType(def,'bbbfly.Panel',ref,parent);
};
bbbfly.morph.ContentFrame = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'ContentFrame');
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};
bbbfly.morph.InputFrame = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'InputFrame');
  return ngCreateControlAsType(def,'bbbfly.Frame',ref,parent);
};
bbbfly.morph.ContentSeparator = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    ControlsPanel: null,
    Methods: { GetFrame: bbbfly.morph.line._getFrame }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,'ContentSeparator');
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
