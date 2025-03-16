/**
 * @file
 * @author Jan Nejedly [support@3b-fly.eu]
 * @copyright Jan Nejedly
 *
 * @inpackage theme-frame-medium
 */

/** @ignore */
var bbbfly = bbbfly || {};
/** @ignore */
bbbfly.morph = bbbfly.morph || {};
/** @ignore */
bbbfly.morph.theme = bbbfly.morph.theme || {};
/** @ignore */
bbbfly.morph.theme.frame = bbbfly.morph.theme.frame || {};
/** @ignore */
bbbfly.morph.theme.frame.medium = bbbfly.morph.theme.frame.medium || {};
/** @ignore */
bbbfly.morph.theme.frame.medium.images = {};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._padding = function(padding){
  if(Object.isObject(padding)){
    ng_MergeVar(padding,{L:0,T:0,R:0,B:0});
  }
  else if(Number.isInteger(padding)){
    padding = {L:padding,T:padding,R:padding,B:padding};
  }
  else{
    padding = {L:0,T:0,R:0,B:0};
  }
  return padding;
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._image = function(anchor,padding){
  padding = this.Padding(padding);

  return {
    T:(0+padding.T),
    L:(0+padding.L), oL:(30+padding.L),
    SL:(60+padding.L), oSL:(90+padding.L),
    DL:(120+padding.L), DSL:(150+padding.L),

    W:(28-padding.L-padding.R), H:(28-padding.T-padding.B),
    Src:{Img:'image', Anchor:anchor}
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._progressRing = function(anchor){
  return {
    T:0,
    L:0, DL:42,
    W:40, H:40,
    Src:{Img:'progress', Anchor:anchor}
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._panelFrame = function(anchor){
  var frame = {Img:'frame', Anchor:anchor};
  var hFrame = {Img:'frame_h', Anchor:anchor};
  var vFrame = {Img:'frame_v', Anchor:anchor};

  return {
    LeftTop: { L:0, DL:30, T:0, W:2, H:2, Src:frame },
    Top: { L:0, T:0, DT:30, H:2, Src:hFrame },
    RightTop: { L:26, DL:56, T:0, W:2, H:2, Src:frame },
    Left: { L:0, DL:30, T:0, W:2, Src:vFrame },
    Right: { L:26, DL:56, T:0, W:2, Src:vFrame },
    LeftBottom: { L:0, DL:30, T:26, W:2, H:2, Src:frame },
    Bottom: { L:0, T:26, DT:56, H:2, Src:hFrame },
    RightBottom: { L:26, DL:56, T:26, W:2, H:2, Src:frame }
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._hLineFrame = function(anchor){
  return {
    Left: { L:0, DL:30, T:12, W:3, H:3, Src:{Img:'frame', Anchor:anchor} },
    Center: { L:0, T:0, DT:5, H:3, Src:{Img:'frame_h', Anchor:anchor} },
    Right: { L:25, DL:55, T:12, W:3, H:3, Src:{Img:'frame', Anchor:anchor} }
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._vLineFrame = function(anchor){
  return {
    Top: { L:12, DL:42, T:0, W:3, H:3, Src:{Img:'frame', Anchor:anchor} },
    Center: { L:0, DL:5, T:0, W:3, Src:{Img:'frame_v', Anchor:anchor} },
    Bottom: { L:12, DL:42, T:25, W:3, H:3, Src:{Img:'frame', Anchor:anchor} }
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._hintFrame = function(anchor){
  var frame = {Img:'frame', Anchor:anchor};
  var hFrame = {Img:'frame_h', Anchor:anchor};
  var vFrame = {Img:'frame_v', Anchor:anchor};

  return {
    LeftTop: { L:0, DL:30, T:0, W:4, H:4, Src:frame },
    Top: { L:0, T:0, DT:30, H:4, Src:hFrame },
    RightTop: { L:24, DL:54, T:0, W:4, H:4, Src:frame },
    Left: { L:0, DL:30, T:0, W:4, Src:vFrame },
    Right: { L:24, DL:54, T:0, W:4, Src:vFrame },
    LeftBottom: { L:0, DL:30, T:24, W:4, H:4, Src:frame },
    Bottom: { L:0, T:24, DT:54, H:4, Src:hFrame },
    RightBottom: { L:24, DL:54, T:24, W:4, H:4, Src:frame }
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._hintAnchors = function(anchor){
  var frame = {Img:'frame', Anchor:anchor};

  return {
    lefttop: { L:-13, T:7, HX:0, HY:7, Img: { L:74, DL:104, T:14, W:14, H:14, Src:frame } },
    leftbottom: { L:-13, B:7, HX:0, HY:7, Img: { L:74, DL:104, T:14, W:14, H:14, Src:frame } },
    righttop: { R:-13, T:7, HX:13, HY:7, Img: { L:60, DL:90, T:0, W:14, H:14, Src:frame } },
    rightbottom: { R:-13, B:7, HX:13, HY:7, Img: { L:60, DL:90, T:0, W:14, H:14, Src:frame } },

    topleft: { L:7, T:-13, HX:7, HY:1, Img: { L:60, DL:90, T:14, W:14, H:14, Src:frame } },
    topright: { R:7, T:-13, HX:7, HY:1, Img: { L:60, DL:90, T:14, W:14, H:14, Src:frame } },
    bottomright: { R:7, B:-13, HX:7, HY:13, Img: { L:74, DL:104, T:0, W:14, H:14, Src:frame } },
    bottomleft: { L:7, B:-13, HX:7, HY:13, Img: { L:74, DL:104, T:0, W:14, H:14, Src:frame } }
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._buttonFrame = function(anchor){
  var button = {Img:'button', Anchor:anchor};
  var hButton = {Img:'button_h', Anchor:anchor};
  var vButton = {Img:'button_v', Anchor:anchor};

  return {
    LeftTop: {
      L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:0, W:3, H:3,
      IL:180, oIL:210, ISL:240, oISL:270, DIL:300, DISL:330,
      Src:button
    },
    Top: {
      T:0, oT:30, ST:60, oST:90, DT:120, DST:150, L:0, H:3,
      IT:180, oIT:210, IST:240, oIST:270, DIT:300, DIST:330,
      Src:hButton
    },
    RightTop: {
      L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:0, W:3, H:3,
      IL:205, oIL:235, ISL:265, oISL:295, DIL:325, DISL:355,
      Src:button
    },
    Left: {
      L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:0, W:3,
      IL:180, oIL:210, ISL:240, oISL:270, DIL:300, DISL:330,
      Src:vButton
    },
    Right: {
      L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:0, W:3,
      IL:205, oIL:235, ISL:265, oISL:295, DIL:325, DISL:355,
      Src:vButton
    },
    LeftBottom: {
      L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:25, W:3, H:3,
      IL:180, oIL:210, ISL:240, oISL:270, DIL:300, DISL:330,
      Src:button
    },
    Bottom: {
      T:25, oT:55, ST:85, oST:115, DT:145, DST:175, L:0, H:3,
      IT:205, oIT:235, IST:265, oIST:295, DIT:325, DIST:355,
      Src:hButton
    },
    RightBottom: {
      L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:25, W:3, H:3,
      IL:205, oIL:235, ISL:265, oISL:295, DIL:325, DISL:355,
      Src:button
    }
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._buttonImage = function(anchor,indent){
  var padding = this.Padding(indent);

  return {
    T:(0+padding.T),
    L:(0+padding.L), oL:(30+padding.L),
    SL:(60+padding.L), oSL:(90+padding.L),
    DL:(120+padding.L), DSL:(150+padding.L),
    IL:(180+padding.L), oIL:(210+padding.L),
    ISL:(240+padding.L), oISL:(270+padding.L),
    DIL:(300+padding.L), DISL:(330+padding.L),

    W:(28-padding.L-padding.R), H:(28-padding.T-padding.B),
    Src:{Img:'button', Anchor:anchor}
  };
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._buttonIcon = function(anchor,padding){
  padding = this.Padding(padding);
  var icons = {};

  for(var name in this.Icons){
    var index = this.Icons[name];
    if(!Number.isInteger(index)){index = -1;}

    icons[name] = {
      T:(0+(index*30)+padding.T),
      L:(0+padding.L), oL:(30+padding.L),
      SL:(60+padding.L), oSL:(90+padding.L),
      DL:(120+padding.L), DSL:(120+padding.L),
      W:(28-padding.L-padding.R),
      H:(28-padding.T-padding.B),
      Src:{Img:'icon', Anchor:anchor}
    };
  }
  return icons;
};

/** @ignore */
bbbfly.morph.theme.frame.medium.images._editFrame = function(anchor){
  var edit = {Img:'edit', Anchor:anchor};
  var hEdit = {Img:'edit_h', Anchor:anchor};
  var vEdit = {Img:'edit_v', Anchor:anchor};

  return {
    LeftTop: {
      L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:0, W:3, H:3,
      IL:180, oIL:210, ISL:240, oISL:270, DIL:300, DISL:330,
      Src:edit
    },
    Top: {
      T:0, oT:30, ST:60, oST:90, DT:120, DST:150, L:0, H:3,
      IT:180, oIT:210, IST:240, oIST:270, DIT:300, DIST:330,
      Src:hEdit
    },
    RightTop: {
      L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:0, W:3, H:3,
      IL:205, oIL:235, ISL:265, oISL:295, DIL:325, DISL:355,
      Src:edit
    },
    Left: {
      L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:0, W:3,
      IL:180, oIL:210, ISL:240, oISL:270, DIL:300, DISL:330,
      Src:vEdit
    },
    Right: {
      L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:0, W:3,
      IL:205, oIL:235, ISL:265, oISL:295, DIL:325, DISL:355,
      Src:vEdit
    },
    LeftBottom: {
      L:0, oL:30, SL:60, oSL:90, DL:120, DSL:150, T:25, W:3, H:3,
      IL:180, oIL:210, ISL:240, oISL:270, DIL:300, DISL:330,
      Src:edit
    },
    Bottom: {
      T:25, oT:55, ST:85, oST:115, DT:145, DST:175, L:0, H:3,
      IT:205, oIT:235, IST:265, oIST:295, DIT:325, DIST:355,
      Src:hEdit
    },
    RightBottom: {
      L:25, oL:55, SL:85, oSL:115, DL:145, DSL:175, T:25, W:3, H:3,
      IL:205, oIL:235, ISL:265, oISL:295, DIL:325, DISL:355,
      Src:edit
    }
  };
};

/**
 * @class
 * @hideconstructor
 *
 * @inpackage theme-frame-medium
 *
 * @property {object} Sources - Returns image sources definition
 * @property {function} Images - Returns images definition
 * @property {function} Icons - Icons definition
 */
bbbfly.morph.theme.frame.medium.Images = {

  Sources: function(){
    return {
      image: {
        Path: 'morph-medium-image.png?2',
        Anchors: {
          list_check: { L:0, T:0 },
          list_tree: { L:0, T:30 },
          menu_check: { L:0, T:60 },
          menu_tree: { L:0, T:90 },
          menu_sub: { L:0, T:120 },
          edit_drop: { L:0, T:150 }
        }
      },
      progress: {
        Path: 'morph-medium-progress.gif?2',
        Anchors: {
          ring: { L:0, T:0 }
        }
      },
      frame: {
        Path: 'morph-medium-frame.png?2',
        Anchors: {
          line_outer: { L:0, T:0 },
          line_inner: { L:0, T:30 },
          frame_outer: { L:0, T:60 },
          frame_inner: { L:0, T:90 },
          frame_hint_warn: { L:0, T:120 },
          frame_hint_error: { L:0, T:150 },
          frame_hint_submit: { L:0, T:180 },
          frame_hint_info: { L:0, T:210 }
        }
      },
      frame_h: {
        Path: 'morph-medium-frame_h.png?2',
        Anchors: {
          line_outer: { L:0, T:0 },
          line_inner: { L:0, T:10 },
          frame_outer: { L:0, T:20 },
          frame_inner: { L:0, T:80 },
          frame_hint_warn: { L:0, T:140 },
          frame_hint_error: { L:0, T:200 },
          frame_hint_submit: { L:0, T:260 },
          frame_hint_info: { L:0, T:320 }
        }
      },
      frame_v: {
        Path: 'morph-medium-frame_v.png?2',
        Anchors: {
          line_outer: { L:0, T:0 },
          line_inner: { L:10, T:0 },
          frame_outer: { L:20, T:0 },
          frame_inner: { L:80, T:0 },
          frame_hint_warn: { L:140, T:0 },
          frame_hint_error: { L:200, T:0 },
          frame_hint_submit: { L:260, T:0 },
          frame_hint_info: { L:320, T:0 }
        }
      },
      button: {
        Path: 'morph-medium-button.png?2',
        Anchors: {
          button_panel: { L:0, T:0 },
          button_inverse: { L:0, T:30 },
          button_std: { L:0, T:60 },
          button_flat: { L:0, T:90 },
          button_input: { L:0, T:120 },

          button_check: { L:0, T:150 },
          button_radio: { L:0, T:180 }
        }
      },
      button_h: {
        Path: 'morph-medium-button_h.png?2',
        Anchors: {
          button_panel: { L:0, T:0 },
          button_inverse: { L:0, T:360 },
          button_std: { L:0, T:720 },
          button_flat: { L:0, T:1080 },
          button_input: { L:0, T:1440 }
        }
      },
      button_v: {
        Path: 'morph-medium-button_v.png?2',
        Anchors: {
          button_panel: { L:0, T:0 },
          button_inverse: { L:360, T:0 },
          button_std: { L:720, T:0 },
          button_flat: { L:1080, T:0 },
          button_input: { L:1440, T:0 }
        }
      },
      edit: {
        Path: 'morph-medium-edit.png?2',
        Anchors: {
          edit_box: { L:0, T:0 }
        }
      },
      edit_h: {
        Path: 'morph-medium-edit_h.png?2',
        Anchors: {
          edit_box: { L:0, T:0 }
        }
      },
      edit_v: {
        Path: 'morph-medium-edit_v.png?2',
        Anchors: {
          edit_box: { L:0, T:0 }
        }
      },
      icon: {
        Path: 'morph-medium-icon.png?2',
        Anchors: {
          misc: { L:0, T:0 }
        }
      }
    };
  },

  Images: function(){
    return {
      Image: {
        List: {
          Check: this.Image('list_check',{R:6,T:4,B:4}),
          Tree: this.Image('list_tree',{L:4,R:4,T:4,B:4})
        },
        Menu: {
          Check: this.Image('menu_check',{R:6,T:2,B:2}),
          Tree: this.Image('menu_tree',{L:4,R:4,T:2,B:2}),
          SubMenu: this.Image('menu_sub',{L:4,R:4,T:2,B:2})
        },
        Edit: {
          DropDown: this.Image('edit_drop')
        }
      },
      Line: {
        Outer: {
          Horizontal: this.HLineFrame('line_outer'),
          Vertical: this.VLineFrame('line_outer')
        },
        Inner: {
          Horizontal: this.HLineFrame('line_inner'),
          Vertical: this.VLineFrame('line_inner')
        }
      },
      Frame: {
        Outer: this.PanelFrame('frame_outer'),
        Inner: this.PanelFrame('frame_inner')
      },
      HintFrame: {
        Frame: {
          Warn: this.HintFrame('frame_hint_warn'),
          Error: this.HintFrame('frame_hint_error'),
          Submit: this.HintFrame('frame_hint_submit'),
          Info: this.HintFrame('frame_hint_info')
        },
        Anchors: {
          Warn: this.HintAnchors('frame_hint_warn'),
          Error: this.HintAnchors('frame_hint_error'),
          Submit: this.HintAnchors('frame_hint_submit'),
          Info: this.HintAnchors('frame_hint_info')
        }
      },
      Progress: {
        Ring: this.ProgressRing('ring')
      },
      ButtonFrame: {
        Panel: this.ButtonFrame('button_panel'),
        Inverse: this.ButtonFrame('button_inverse'),
        Std: this.ButtonFrame('button_std'),
        Flat: this.ButtonFrame('button_flat'),
        Input: this.ButtonFrame('button_input')
      },
      Button: {
        Panel: {
          Center: this.ButtonImage('button_panel')
        },
        Flat: {
          Center: this.ButtonImage('button_flat')
        },
        Check: this.ButtonImage('button_check',4),
        Radio: this.ButtonImage('button_radio',3)
      },
      EditFrame: {
        EditBox: this.EditFrame('edit_box')
      },
      Icon: {
        Button: this.ButtonIcon('misc'),
        Edit: this.ButtonIcon('misc',3)
      }
    };
  },

  Icons: {
    none: -1,
    plus: 0,
    minus: 1,
    add: 2,
    remove: 3,
    up: 4,
    down: 5,
    left: 6,
    right: 7,
    close: 8,
    refresh: 9,
    edit: 10,
    delete: 11,
    settings: 12,
    search: 13,
    filter: 14,
    list: 15,
    layers: 16,
    copyright: 17,
    drop: 18,
    circle: 19,
    set: 20
  },

  /** @private */
  Padding: bbbfly.morph.theme.frame.medium.images._padding,

  /** @private */
  Image: bbbfly.morph.theme.frame.medium.images._image,
  /** @private */
  ProgressRing: bbbfly.morph.theme.frame.medium.images._progressRing,
  /** @private */
  PanelFrame: bbbfly.morph.theme.frame.medium.images._panelFrame,
  /** @private */
  HLineFrame: bbbfly.morph.theme.frame.medium.images._hLineFrame,
  /** @private */
  VLineFrame: bbbfly.morph.theme.frame.medium.images._vLineFrame,
  /** @private */
  HintFrame: bbbfly.morph.theme.frame.medium.images._hintFrame,
  /** @private */
  HintAnchors: bbbfly.morph.theme.frame.medium.images._hintAnchors,
  /** @private */
  ButtonFrame: bbbfly.morph.theme.frame.medium.images._buttonFrame,
  /** @private */
  ButtonImage: bbbfly.morph.theme.frame.medium.images._buttonImage,
  /** @private */
  ButtonIcon: bbbfly.morph.theme.frame.medium.images._buttonIcon,
  /** @private */
  EditFrame: bbbfly.morph.theme.frame.medium.images._editFrame,
};