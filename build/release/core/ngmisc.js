/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ngmisc={};bbbfly.morph.ngmisc._updateClassName=function(b){this.BaseClassName=this.GetClassName();var a=this.Elm();if(a){var d=a.className,e=d.indexOf(" "),c=this.BaseClassName;String.isString(c)||(c="");0<=e&&(c+=d.substr(e));a.className=c}return this.Update.callParent(b)};bbbfly.morph.ngmisc.ApplyControlClassName=function(b,a){Object.isObject(b)&&(bbbfly.morph.misc.ApplyControlClassName(b,a),ng_MergeDef(b,{className:a,Methods:{Update:bbbfly.morph.ngmisc._updateClassName}}))};
