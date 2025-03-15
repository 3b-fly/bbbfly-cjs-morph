/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.ngmisc = {};
bbbfly.morph.ngmisc._updateClassName = function(recursive){
  this.BaseClassName = this.GetClassName();

  var node = this.Elm();
  if(node){
    var cn = node.className;
    var ix = cn.indexOf(' ');

    var ncn = this.BaseClassName;
    if(!String.isString(ncn)){ncn = '';}
    if(ix >= 0){ncn += cn.substr(ix);}
    node.className = ncn;
  }

  return this.Update.callParent(recursive);
};
bbbfly.morph.ngmisc.ApplyControlClassName = function(def,className){
  if(!Object.isObject(def)){return;}
  bbbfly.morph.misc.ApplyControlClassName(def,className);

  ng_MergeDef(def,{
    className: className,
    Methods: { Update: bbbfly.morph.ngmisc._updateClassName }
  });
};
