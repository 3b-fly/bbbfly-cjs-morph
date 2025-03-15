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

/**
 * @class
 * @type control
 * @extends bbbfly.EditBox
 * @implements bbbfly.Morph.Control
 *
 * @inpackage edit
 *
 * @param {bbbfly.Edit.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
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

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_edit'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.EditBox',bbbfly.morph.EditBox
    );
  }
};
