/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.theme = bbbfly.morph.theme || {};
bbbfly.morph.theme.map = bbbfly.morph.theme.map || {};
bbbfly.morph.theme.map.drawing = bbbfly.morph.theme.map.drawing || {};
bbbfly.morph.theme.map.drawing.objects = {};
bbbfly.morph.theme.map.drawing.objects._iconImages = function(opts,imgs){
  var images = [];

  if(Object.isObject(opts) && Object.isObject(imgs)){
    imgs = imgs[opts.Size];

    if(Object.isObject(imgs)){
      imgs = imgs[opts.Shape];

      if(Object.isObject(imgs)){
        imgs = imgs[opts.Color];

        if(Object.isObject(imgs)){
          images.push(imgs);
        }
      }
    }
  }

  if(Object.isObject(opts.FrontImg)){
    images.push(opts.FrontImg);
 }

  return images;
};
bbbfly.morph.theme.map.drawing.objects._geomStyle = function(opts,colors,cn){
  var lColor = '#000000';
  var fColor = '#000000';

  if(Object.isObject(opts) && Object.isObject(colors)){
    var colorDef = colors[opts.Color];

    if(Object.isObject(colorDef)){
      lColor = colorDef.Value;
      fColor = colorDef.Value;
    }
  }

  return {
    weight: 2,
    color: lColor,
    opacity: 1,
    fillColor: fColor,
    fillOpacity: 0.2,
    className: cn
  };
};
bbbfly.morph.theme.map.drawing.objects.Icon = function(obj,imgs){
  if(!Object.isObject(obj)){return;}

  ng_OverrideMethod(obj,'GetImages',function(){
    return bbbfly.morph.theme.map.drawing.objects._iconImages(
      obj.MorphOptions,imgs
    );
  });
};
bbbfly.morph.theme.map.drawing.objects.Geometry = function(obj,colors){
  if(!Object.isObject(obj)){return;}

  ng_OverrideMethod(obj,'GetStyle',function(){
    return bbbfly.morph.theme.map.drawing.objects._geomStyle(
      obj.MorphOptions,colors,this.GetClassName()
    );
  });
};
bbbfly.morph.theme.map.drawing.objects.SkinObject = function(obj,colors,imgs){
  if(
    !Object.isObject(obj)
    || !Object.isObject(colors)
    || !Object.isObject(imgs)
  ){return;}

  if(obj instanceof bbbfly.morph.map.drawing.Icon){
      this.Icon(obj,imgs);
  }
  else if(obj instanceof bbbfly.morph.map.drawing.Geometry){
      this.Geometry(obj,colors);
  }
};
