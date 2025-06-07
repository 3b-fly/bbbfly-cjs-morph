/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.Edit=function(a){a=a||{};ng_MergeDef(a,{Data:{HintDef:{Type:"bbbfly.morph.TextHint"}}});return a};bbbfly.morph.EditBox=function(a,b,c){a=bbbfly.morph.Edit(a);bbbfly.morph.misc.ApplyControlClassName(a,"EditBox");return ngCreateControlAsType(a,"bbbfly.EditBox",b,c)};
bbbfly.morph.DropDownBox=function(a,b,c){a=bbbfly.morph.Edit(a);bbbfly.morph.misc.ApplyControlClassName(a,"DropDownBox");return ngCreateControlAsType(a,"bbbfly.DropDownBox",b,c)};ngUserControls=ngUserControls||[];ngUserControls.bbbfly_morph_edit={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.EditBox",bbbfly.morph.EditBox);bbbfly.Morph.RegisterControlType("bbbfly.morph.DropDownBox",bbbfly.morph.DropDownBox)}};
