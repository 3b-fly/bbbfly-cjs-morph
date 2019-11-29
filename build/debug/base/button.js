/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.0
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.Button = function(def,ref,parent,className){
  def = def || {};

  bbbfly.morph.misc.ApplyIconShade(def);
  bbbfly.morph.misc.ApplyFrameShade(def);

  ng_MergeDef(def,{
    HintDef: {
      Type: 'bbbfly.morph.TextHint'
    }
  });

  bbbfly.morph.misc.ApplyClassShade(def,(className || 'Button'));
  return ngCreateControlAsType(def,'bbbfly.Btn',ref,parent);
};
bbbfly.morph.PanelButton = function(def,ref,parent){
  return bbbfly.morph.Button(def,ref,parent,'PanelButton');
};
bbbfly.morph.ContentButton = function(def,ref,parent){
  return bbbfly.morph.Button(def,ref,parent,'ContentButton');
};
bbbfly.morph.LargeContentButton = function(def,ref,parent){
  return bbbfly.morph.Button(def,ref,parent,'LargeContentButton');
};
bbbfly.morph.ContentFlatButton = function(def,ref,parent){
  return bbbfly.morph.Button(def,ref,parent,'ContentFlatButton');
};
bbbfly.morph.ContentInputButton = function(def,ref,parent){
  return bbbfly.morph.Button(def,ref,parent,'ContentInputButton');
};
bbbfly.morph.PanelIconButton = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    ControlsPanel: null,
    Methods: {
      GetText: function(){return '';}
    }
  });

  return bbbfly.morph.Button(def,ref,parent,'IconButtonBanel');
};
bbbfly.morph.ContentIconButton = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    ControlsPanel: null,
    Methods: {
      GetText: function(){return '';}
    }
  });

  return bbbfly.morph.Button(def,ref,parent,'ContentIconButton');
};
bbbfly.morph.ContentCheckBox = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      SelectType: bbbfly.Btn.selecttype.both,
      AutoSize: bbbfly.Btn.autosize.both
    },
    ControlsPanel: null
  });

  return bbbfly.morph.Button(def,ref,parent,'ContentCheckBox');
};
bbbfly.morph.ContentRadioButton = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      SelectType: bbbfly.Btn.selecttype.both,
      AutoSize: bbbfly.Btn.autosize.both
    },
    ControlsPanel: null
  });

  return bbbfly.morph.Button(def,ref,parent,'ContentRadioButton');
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_button'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.PanelButton',bbbfly.morph.PanelButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentButton',bbbfly.morph.ContentButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.LargeContentButton',bbbfly.morph.LargeContentButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentFlatButton',bbbfly.morph.ContentFlatButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.PanelIconButton',bbbfly.morph.PanelIconButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentInputButton',bbbfly.morph.ContentInputButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentIconButton',bbbfly.morph.ContentIconButton
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentCheckBox',bbbfly.morph.ContentCheckBox
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentRadioButton',bbbfly.morph.ContentRadioButton
    );
  }
};
