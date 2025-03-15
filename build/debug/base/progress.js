/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.progress = {};
bbbfly.morph.ProgressRing = function(def,ref,parent){
  def = def || {};

  bbbfly.morph.misc.ApplyControlClassName(def,'ProgressRing');
  return ngCreateControlAsType(def,'bbbfly.ProgressRing',ref,parent);
};
bbbfly.morph.ProgressBar = function(def,ref,parent){
  def = def || {};

  bbbfly.morph.misc.ApplyControlClassName(def,'ProgressBar');
  return ngCreateControlAsType(def,'bbbfly.ProgressBar',ref,parent);
};
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
