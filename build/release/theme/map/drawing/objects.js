/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly=bbbfly||{};bbbfly.morph=bbbfly.morph||{};bbbfly.morph.theme=bbbfly.morph.theme||{};bbbfly.morph.theme.map=bbbfly.morph.theme.map||{};bbbfly.morph.theme.map.drawing=bbbfly.morph.theme.map.drawing||{};bbbfly.morph.theme.map.drawing.objects={};
bbbfly.morph.theme.map.drawing.objects._iconImages=function(a,b){var c=[];Object.isObject(a)&&Object.isObject(b)&&(b=b[a.Size],Object.isObject(b)&&(b=b[a.Shape],Object.isObject(b)&&(b=b[a.Color],Object.isObject(b)&&c.push(b))));Object.isObject(a.FrontImg)&&c.push(a.FrontImg);return c};
bbbfly.morph.theme.map.drawing.objects._geomStyle=function(a,b,c){var d="#000000",e="#000000";Object.isObject(a)&&Object.isObject(b)&&(a=b[a.Color],Object.isObject(a)&&(e=d=a.Value));return{weight:2,color:d,opacity:1,fillColor:e,fillOpacity:.2,className:c}};bbbfly.morph.theme.map.drawing.objects.Icon=function(a,b){Object.isObject(a)&&ng_OverrideMethod(a,"GetImages",function(){return bbbfly.morph.theme.map.drawing.objects._iconImages(a.MorphOptions,b)})};
bbbfly.morph.theme.map.drawing.objects.Geometry=function(a,b){Object.isObject(a)&&ng_OverrideMethod(a,"GetStyle",function(){return bbbfly.morph.theme.map.drawing.objects._geomStyle(a.MorphOptions,b,this.GetClassName())})};bbbfly.morph.theme.map.drawing.objects.SkinObject=function(a,b,c){Object.isObject(a)&&Object.isObject(b)&&Object.isObject(c)&&(a instanceof bbbfly.morph.map.drawing.Icon?this.Icon(a,c):a instanceof bbbfly.morph.map.drawing.Geometry&&this.Geometry(a,b))};
