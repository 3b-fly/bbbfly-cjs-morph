/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.hint={};bbbfly.morph.hint._doUpdate=function(a){a instanceof HTMLElement&&(String.isString(this.HintType)?a.setAttribute("type",this.HintType):a.removeAttribute("type"));this.DoUpdate.callParent(a)};
bbbfly.morph.TextHint=function(a,e,f){a=a||{};ng_MergeDef(a,{Data:{HintType:null},Methods:{DoUpdate:bbbfly.morph.hint._doUpdate}});if(a.Data&&String.isString(a.Data.HintType)){var d=a.Data.HintType,b=a.Data.Frame,c=a.Data.Anchors;b&&(b=b[d],Object.isObject(b)&&(a.Data.Frame=b));c&&(c=c[d],Object.isObject(c)&&(a.Data.Anchors=c))}bbbfly.morph.ngmisc.ApplyControlClassName(a,"TextHint");return ngCreateControlAsType(a,"bbbfly.TextHint",e,f)};
bbbfly.morph.TextHint.type={info:"Info",submit:"Submit",warn:"Warn",error:"Error"};ngUserControls=ngUserControls||[];ngUserControls.bbbfly_morph_hint={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.TextHint",bbbfly.morph.TextHint)}};
