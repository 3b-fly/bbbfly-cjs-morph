/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage wrapper
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};

/**
 * @class
 * @type control
 * @extends bbbfly.Wrapper
 * @implements bbbfly.Morph.Control
 *
 * @inpackage wrapper
 *
 * @param {bbbfly.Wrapper.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentWrapper = function(def,ref,parent){
  bbbfly.morph.misc.ApplyControlClassName(def,'ContentWrapper');
  return ngCreateControlAsType(def,'bbbfly.Wrapper',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_wrapper'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentWrapper',bbbfly.morph.ContentWrapper
    );
  }
};
