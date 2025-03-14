/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage progress
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.progress = {};

/**
 * @class
 * @type control
 * @extends bbbfly.ProgressRing
 *
 * @inpackage progress
 *
 * @param {bbbfly.ProgressRing.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ProgressRing = function(def,ref,parent){
  def = def || {};

  bbbfly.morph.misc.ApplyControlClassName(def,'ProgressRing');
  return ngCreateControlAsType(def,'bbbfly.ProgressRing',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.ProgressBar
 *
 * @inpackage progress
 *
 * @param {bbbfly.ProgressBar.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ProgressBar = function(def,ref,parent){
  def = def || {};

  bbbfly.morph.misc.ApplyControlClassName(def,'ProgressBar');
  return ngCreateControlAsType(def,'bbbfly.ProgressBar',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_progress'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ProgressRing',bbbfly.morph.ProgressRing
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ProgressBar',bbbfly.morph.ProgressBar
    );
  }
};
