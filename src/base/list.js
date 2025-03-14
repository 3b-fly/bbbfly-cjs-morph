/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage list
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.list = {};
bbbfly.morph.checklist = {};

/** @ignore */
bbbfly.morph.list._onGetRowClassName = function(list,item){
  var cn = 'Row';
  var bcn = list.BaseClassName;
  if(!String.isString(bcn)){bcn = '';}

  if(item.H || list.ItemHeight){
    cn += ' '+bcn+'FixedH';
  }
  if(item.Static){
    cn += ' '+bcn+'Static';
  }

  cn += ' '+bcn+'Row';
  return cn;
};

/** @ignore */
bbbfly.morph.list._onGetCheckImg = function(list,item){
  if(!this.ShowCheckboxes || !item){return null;}
  if(typeof item.Checked === 'undefined'){return null;}

  return Function.isFunction(this.OnGetCheckImg.callParent)
    ? this.OnGetCheckImg.callParent(list,item) : this.CheckImg;
};

/** @ignore */
bbbfly.morph.checklist._onListClick = function(event){
  var list = event.list;

  if(event.timeStamp !== list._last_click_timestamp){
    list._last_click_timestamp = event.timeStamp;
    list.CheckItem(event.listItem,!event.listItem.Checked);
  }

  return false;
};

/**
 * @class
 * @type control
 * @extends bbbfly.List
 * @implements bbbfly.Morph.Control
 *
 * @inpackage list
 *
 * @param {bbbfly.List.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentList = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Events: {
      OnGetRowClassName: bbbfly.morph.list._onGetRowClassName
    },
    OverrideEvents: {
      OnGetCheckImg: bbbfly.morph.list._onGetCheckImg
    }
  });

  bbbfly.morph.ngmisc.ApplyControlClassName(def,'ContentList');
  return ngCreateControlAsType(def,'bbbfly.List',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.morph.ContentList
 * @implements bbbfly.Morph.Control
 *
 * @inpackage list
 *
 * @param {bbbfly.List.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentCheckList = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: { ShowCheckboxes: true },
    Events: { OnClick: bbbfly.morph.checklist._onListClick }
  });

  return ngCreateControlAsType(def,'bbbfly.morph.ContentList',ref,parent);
};

/**
 * @class
 * @type control
 * @extends bbbfly.morph.ContentList
 * @implements bbbfly.Morph.Control
 *
 * @inpackage list
 *
 * @param {bbbfly.List.Definition} [def=undefined] - Descendant definition
 * @param {object} [ref=undefined] - Reference owner
 * @param {object|string} [parent=undefined] - Parent DIV element or it's ID
 */
bbbfly.morph.ContentTreeList = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.morph.ContentList',ref,parent);
};

/** @ignore */
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_list'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentList',bbbfly.morph.ContentList
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentCheckList',bbbfly.morph.ContentCheckList
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.ContentTreeList',bbbfly.morph.ContentTreeList
    );
  }
};
