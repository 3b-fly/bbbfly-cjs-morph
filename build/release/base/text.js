/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.Text=function(a,b,c){bbbfly.morph.misc.ApplyControlClassName(a,"Text");return ngCreateControlAsType(a,"bbbfly.Text",b,c)};bbbfly.morph.Text.LineHeight=20;bbbfly.morph.Label=function(a,b,c){a=a||{};ng_MergeDef(a,{Data:{Selectable:!1}});bbbfly.morph.misc.ApplyControlClassName(a,"Label");return ngCreateControlAsType(a,"bbbfly.Text",b,c)};bbbfly.morph.Label.LineHeight=28;
bbbfly.morph.Title=function(a,b,c){a=a||{};ng_MergeDef(a,{Data:{TextAlign:bbbfly.Text.textalign.center,Selectable:!1}});bbbfly.morph.misc.ApplyControlClassName(a,"Title");return ngCreateControlAsType(a,"bbbfly.Text",b,c)};bbbfly.morph.Title.LineHeight=28;ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_text={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.Text",bbbfly.morph.Text);bbbfly.Morph.RegisterControlType("bbbfly.morph.Label",bbbfly.morph.Label);bbbfly.Morph.RegisterControlType("bbbfly.morph.Title",bbbfly.morph.Title)}};
