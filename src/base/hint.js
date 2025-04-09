/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage hint
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.hint = {};

/** @ignore */
bbbfly.morph.hint._doUpdate = function(node){
  if(!this.DoUpdate.callParent(node)){return false;}

  if(node instanceof HTMLElement){
    if(String.isString(this.HintType)){
      node.setAttribute('type',this.HintType);
    }
    else{
      node.removeAttribute('type');
    }
  }
  return true;
};

/**
 * @class
 * @type control
 * @extends bbbfly.TextHint
 * @implements bbbfly.Morph.Control
 *
 * @inpackage hint
 *
 * @param {bbbfly.TextHint.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 *
 * @property {bbbfly.morph.TextHint.type} [HintType=null]
 */
bbbfly.morph.TextHint = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: { HintType: null },
    Methods: { DoUpdate: bbbfly.morph.hint._doUpdate }
  });

  if(def.Data && String.isString(def.Data.HintType)){
    var type = def.Data.HintType;
    var frame = def.Data.Frame;
    var anchors = def.Data.Anchors;

    if(frame){
      frame = frame[type];
      if(Object.isObject(frame)){
        def.Data.Frame = frame;
      }
    }

    if(anchors){
      anchors = anchors[type];
      if(Object.isObject(anchors)){
        def.Data.Anchors = anchors;
      }
    }
  }

  bbbfly.morph.ngmisc.ApplyControlClassName(def,'TextHint');
  return ngCreateControlAsType(def,'bbbfly.TextHint',ref,parent);
};

/**
 * @enum {string}
 * @description
 *   Possible values for
 *   {@link bbbfly.morph.TextHint.HintType|bbbfly.morph.TextHint.HintType}
 */
bbbfly.morph.TextHint.type = {
  info: 'Info',
  submit: 'Submit',
  warn: 'Warn',
  error: 'Error'
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_hint'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.TextHint',bbbfly.morph.TextHint
    );
  }
};
