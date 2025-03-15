/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.HTMLContentFrame=function(a,b,c){a=a||{};ng_MergeDef(a,{ControlsPanel:{Data:{OverflowY:bbbfly.Renderer.overflow.auto}}});bbbfly.morph.misc.ApplyControlClassName(a,"HTMLContentFrame");return ngCreateControlAsType(a,"bbbfly.Frame",b,c)};ngUserControls=ngUserControls||[];ngUserControls.bbbfly_morph_html={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.HTMLContentFrame",bbbfly.morph.HTMLContentFrame)}};
