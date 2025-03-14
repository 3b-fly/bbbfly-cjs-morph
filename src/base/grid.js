/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage grid
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/**
 * @class
 * @type control
 * @extends bbbfly.Grid
 * @implements bbbfly.Morph.Control
 *
 * @inpackage grid
 *
 * @param {bbbfly.Grid.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentGrid = function(def,ref,parent){
  def = def || {};

  bbbfly.morph.misc.ApplyControlClassName(def,'ContentGrid');
  return ngCreateControlAsType(def,'bbbfly.Grid',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_grid'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentGrid',bbbfly.morph.ContentGrid
    );
  }
};
