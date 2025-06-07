/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage edit
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/** @private */
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

/**
 * @class
 * @type control
 * @extends bbbfly.EditBox
 * @implements bbbfly.Morph.Control
 *
 * @inpackage edit
 *
 * @param {bbbfly.EditBox.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.EditBox = function(def,ref,parent){
  def = bbbfly.morph.Edit(def);

  bbbfly.morph.misc.ApplyControlClassName(def,'EditBox');
  return ngCreateControlAsType(def,'bbbfly.EditBox',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.DropDownBox
 * @implements bbbfly.Morph.Control
 *
 * @inpackage edit
 *
 * @param {bbbfly.DropDownBox.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.DropDownBox = function(def,ref,parent){
  def = bbbfly.morph.Edit(def);

  bbbfly.morph.misc.ApplyControlClassName(def,'DropDownBox');
  return ngCreateControlAsType(def,'bbbfly.DropDownBox',ref,parent);
};

/** @ignore */
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
