/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.progress={};bbbfly.morph.ProgressRing=function(a,b,c){a=a||{};bbbfly.morph.misc.ApplyControlClassName(a,"ProgressRing");return ngCreateControlAsType(a,"bbbfly.ProgressRing",b,c)};bbbfly.morph.ProgressBar=function(a,b,c){a=a||{};bbbfly.morph.misc.ApplyControlClassName(a,"ProgressBar");return ngCreateControlAsType(a,"bbbfly.ProgressBar",b,c)};ngUserControls=ngUserControls||[];
ngUserControls.bbbfly_morph_progress={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.ProgressRing",bbbfly.morph.ProgressRing);bbbfly.Morph.RegisterControlType("bbbfly.morph.ProgressBar",bbbfly.morph.ProgressBar)}};
