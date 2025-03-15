/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.menu={};bbbfly.morph.menu._onGetCheckImg=function(a,b){return this.ShowCheckboxes&&b&&"undefined"!==typeof b.Checked?Function.isFunction(this.OnGetCheckImg.callParent)?this.OnGetCheckImg.callParent(a,b):this.CheckImg:null};
bbbfly.morph.PopupMenu=function(a,b,c){a=a||{};ng_MergeDef(a,{Data:{SubMenuDef:{Type:"bbbfly.morph.PopupMenu",MorphTheme:a.MorphTheme}},OverrideEvents:{OnGetCheckImg:bbbfly.morph.menu._onGetCheckImg}});bbbfly.morph.ngmisc.ApplyControlClassName(a,"PopupMenu");return ngCreateControlAsType(a,"bbbfly.Menu",b,c)};ngUserControls=ngUserControls||[];ngUserControls.bbbfly_morph_menu={OnInit:function(){bbbfly.Morph.RegisterControlType("bbbfly.morph.PopupMenu",bbbfly.morph.PopupMenu)}};
