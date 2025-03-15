/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.list = {};
bbbfly.morph.checklist = {};
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
bbbfly.morph.list._onGetCheckImg = function(list,item){
  if(!this.ShowCheckboxes || !item){return null;}
  if(typeof item.Checked === 'undefined'){return null;}

  return Function.isFunction(this.OnGetCheckImg.callParent)
    ? this.OnGetCheckImg.callParent(list,item) : this.CheckImg;
};
bbbfly.morph.checklist._onListClick = function(event){
  var list = event.list;

  if(event.timeStamp !== list._last_click_timestamp){
    list._last_click_timestamp = event.timeStamp;
    list.CheckItem(event.listItem,!event.listItem.Checked);
  }

  return false;
};
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
bbbfly.morph.ContentCheckList = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: { ShowCheckboxes: true },
    Events: { OnClick: bbbfly.morph.checklist._onListClick }
  });

  return ngCreateControlAsType(def,'bbbfly.morph.ContentList',ref,parent);
};
bbbfly.morph.ContentTreeList = function(def,ref,parent){
  return ngCreateControlAsType(def,'bbbfly.morph.ContentList',ref,parent);
};
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
