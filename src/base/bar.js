/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage bar
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/**
 * @class
 * @type control
 * @extends bbbfly.Bar
 * @implements bbbfly.Morph.Control
 *
 * @inpackage bar
 *
 * @param {bbbfly.Bar.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentInputBar = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'ContentInputBar');
  return ngCreateControlAsType(def,'bbbfly.Bar',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_bar'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentInputBar',bbbfly.morph.ContentInputBar
    );
  }
};
