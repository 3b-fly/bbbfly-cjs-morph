/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.ContentGrid=function(a,b,c){a=a||{};bbbfly.morph.misc.ApplyControlClassName(a,"ContentGrid");return ngCreateControlAsType(a,"bbbfly.Grid",b,c)};ngUserControls=ngUserControls||[];ngUserControls.bbbfly_morph_grid={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.ContentGrid",bbbfly.morph.ContentGrid)}};
