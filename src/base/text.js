/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage text
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/**
 * @class
 * @type control
 * @extends bbbfly.Text
 * @implements bbbfly.Morph.Control
 *
 * @inpackage text
 *
 * @param {bbbfly.Text.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.Text = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'Text');
  return ngCreateControlAsType(def,'bbbfly.Text',ref,parent);
};

/** @member {integer} */
bbbfly.morph.Text.LineHeight = 20;

/**
 * @class
 * @type control
 * @extends bbbfly.Text
 * @implements bbbfly.Morph.Control
 *
 * @inpackage text
 *
 * @param {bbbfly.Text.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.Label = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: { Selectable: false }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,'Label');
  return ngCreateControlAsType(def,'bbbfly.Text',ref,parent);
};

/** @member {integer} */
bbbfly.morph.Label.LineHeight = 28;

/**
 * @class
 * @type control
 * @extends bbbfly.Text
 * @implements bbbfly.Morph.Control
 *
 * @inpackage text
 *
 * @param {bbbfly.Text.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
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

/** @member {integer} */
bbbfly.morph.Title.LineHeight = 28;

/** @ignore */
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
