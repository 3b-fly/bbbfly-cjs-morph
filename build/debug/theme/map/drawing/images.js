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
bbbfly.morph.theme.map.drawing.images = {};
bbbfly.morph.theme.map.drawing.images._icons = function(def,colors){
  for(var size in def){
    var imgs = def[size];

    for(var shape in imgs){
      var img = imgs[shape];
      var indent = img.Indent;

      img.Src = {Img:size, Anchor:shape};
      delete img.Indent;

      var icons = {};

      for(var name in colors){
        var color = colors[name];
        var order = color.Order;
        var icon = ng_CopyVar(img);

        if(Number.isInteger(order)){
          icon.L = ((icon.W + indent) * order);
        }
        icons[name] = icon;
      }

      imgs[shape] = icons;
    }
  }
  return def;
};
bbbfly.morph.theme.map.drawing.Images = {

  Sources: function(){
    return {
      tiny: {
        Path: 'morph-map-icon_tiny.png?1',
        Anchors: {
          drop: { L:0, T:0 },
          cluster: { L:0, T:105 },
          disc: { L:0, T:175 },
          circle: { L:0, T:230 },
          ghost: { L:0, T:285 }
        }
      },
      small: {
        Path: 'morph-map-icon_small.png?1',
        Anchors: {
          drop: { L:0, T:0 },
          cluster: { L:0, T:210 },
          disc: { L:0, T:350 },
          circle: { L:0, T:460 },
          ghost: { L:0, T:570 }
        }
      },
      medium: {
        Path: 'morph-map-icon_medium.png?1',
        Anchors: {
          drop: { L:0, T:0 },
          cluster: { L:0, T:315 },
          disc: { L:0, T:525 },
          circle: { L:0, T:690 },
          ghost: { L:0, T:855 }
        }
      },
      large: {
        Path: 'morph-map-icon_large.png?1',
        Anchors: {
          drop: { L:0, T:0 },
          cluster: { L:0, T:420 },
          disc: { L:0, T:700 },
          circle: { L:0, T:920 },
          ghost: { L:0, T:1140 }
        }
      }
    };
  },

  Images: function(colors){
    return this.Icons({
      tiny: {
        drop: {
          W:10, H:20, T:0, oT:21, ST:42, oST:63, DT:84,
          Anchor: { L:5, T:15 }, Indent:1
        },
        cluster: {
          W:10, H:13, T:0, oT:14, ST:28, oST:42, DT:56,
          Anchor: { L:5, T:11 }, Indent:1
        },
        disc: {
          W:10, H:10, T:0, oT:11, ST:22, oST:33, DT:44,
          Anchor: { L:5, T:5 }, Indent:1
        },
        circle: {
          W:10, H:10, T:0, oT:11, ST:22, oST:33, DT:44,
          Anchor: { L:5, T:5 }, Indent:1
        },
        ghost: {
          W:10, H:10, T:0, oT:11, ST:22, oST:33, DT:44,
          Anchor: { L:5, T:5 }, Indent:1
        }
      },
      small: {
        drop: {
          W:20, H:40, T:0, oT:42, ST:84, oST:126, DT:168,
          Anchor: { L:10, T:33 }, Indent:2
        },
        cluster: {
          W:20, H:25, T:0, oT:28, ST:56, oST:84, DT:112,
          Anchor: { L:10, T:22 }, Indent:2
        },
        disc: {
          W:20, H:20, T:0, oT:22, ST:44, oST:66, DT:88,
          Anchor: { L:10, T:10 }, Indent:2
        },
        circle: {
          W:20, H:20, T:0, oT:22, ST:44, oST:66, DT:88,
          Anchor: { L:10, T:10 }, Indent:2
        },
        ghost: {
          W:20, H:20, T:0, oT:22, ST:44, oST:66, DT:88,
          Anchor: { L:10, T:10 }, Indent:2
        }
      },
      medium: {
        drop: {
          W:30, H:60, T:0, oT:63, ST:126, oST:189, DT:252,
          Anchor: { L:15, T:50 }, Indent:3
        },
        cluster: {
          W:30, H:37, T:0, oT:42, ST:84, oST:126, DT:168,
          Anchor: { L:15, T:34 }, Indent:3
        },
        disc: {
          W:30, H:30, T:0, oT:33, ST:66, oST:99, DT:132,
          Anchor: { L:15, T:15 }, Indent:3
        },
        circle: {
          W:30, H:30, T:0, oT:33, ST:66, oST:99, DT:132,
          Anchor: { L:15, T:15 }, Indent:3
        },
        ghost: {
          W:30, H:30, T:0, oT:33, ST:66, oST:99, DT:132,
          Anchor: { L:15, T:15 }, Indent:3
        }
      },
      large: {
        drop: {
          W:40, H:80, T:0, oT:84, ST:168, oST:252, DT:336,
          Anchor: { L:20, T:67 }, Indent:4
        },
        cluster: {
          W:40, H:50, T:56, oT:476, ST:112, oST:168, DT:224,
          Anchor: { L:20, T:45 }, Indent:4
        },
        disc: {
          W:40, H:40, T:0, oT:44, ST:88, oST:132, DT:176,
          Anchor: { L:20, T:20 }, Indent:4
        },
        circle: {
          W:40, H:40, T:0, oT:44, ST:88, oST:132, DT:176,
          Anchor: { L:20, T:20 }, Indent:4
        },
        ghost: {
          W:40, H:40, T:0, oT:44, ST:88, oST:132, DT:176,
          Anchor: { L:20, T:20 }, Indent:4
        }
      }
    },colors);
  },
  Icons: bbbfly.morph.theme.map.drawing.images._icons
};