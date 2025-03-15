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
bbbfly.morph.theme.frame.medium.controls = {};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls._getButtonIcon = function(){
  if(String.isString(this.Icon) && Object.isObject(this._IconRefs)){

    var icon = this._IconRefs[this.Icon];
    return Object.isObject(icon) ? icon : null;
  }

  return this.GetIcon.callParent();
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls._positionMap = function(){
  var map = this.Owner.Map;
  if(!map){return;}

  var mapBounds = {L:0,R:0};

  var zoomSlider = this.Owner.ZoomSlider;

  if(zoomSlider && zoomSlider.Visible){
    if(Number.isInteger(zoomSlider.Bounds.L)){
      mapBounds.L += zoomSlider.Bounds.L;

      if(Number.isInteger(zoomSlider.Bounds.W)){
        mapBounds.L += zoomSlider.Bounds.W;
      }
    }
    else if(Number.isInteger(zoomSlider.Bounds.R)){
      mapBounds.R += zoomSlider.Bounds.R;

      if(Number.isInteger(zoomSlider.Bounds.W)){
        mapBounds.R += zoomSlider.Bounds.W;
      }
    }
  }

  if(map.SetBounds(mapBounds)){
    map.Update();
  }
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ApplyBtnIcon = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      _IconRefs: imgs.Icon.Button
    },
    Methods: {
      GetIcon: bbbfly.morph.theme.frame.medium.controls._getButtonIcon
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Frame.Outer }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.InputFrame = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Frame.Inner }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentSeparator = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Frame: imgs.Line.Inner }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.TextHint = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.HintFrame.Frame,
      Anchors: imgs.HintFrame.Anchors
    },
    ControlsPanel: { className: 'ControlsPanel' },
    Controls: { Hint: { className: 'Hint' } }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ProgressRing = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Image: imgs.Progress.Ring
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ProgressBar = function(def,imgs){
  ng_MergeDef(def,{
    H:10,
    Data: { Frame: imgs.Frame.Inner },
    Controls: {
      Indicator: { T:0, B:0 }
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.PanelButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Panel,
      Indent: { L:-3, T:-3, R:-3, B:-3 }
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.InverseButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Inverse,
      Indent: { L:-3, T:-3, R:-3, B:-3 }
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Std,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentFlatButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Flat,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentInputButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Input,
      Indent: {L:-3,T:-3,R:-3,B:-3}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.LargeContentButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.ButtonFrame.Std,
      Indent: {L:11,T:11,R:11,B:11}
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.PanelIconButton = function(def,imgs){
  ng_MergeDef(def,{
    W:28,H:28,
    Data: {
      Frame: imgs.Button.Panel
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentIconButton = function(def,imgs){
  ng_MergeDef(def,{
    W:28,H:28,
    Data: {
      Frame: imgs.Button.Flat
    }
  });

  this.ApplyBtnIcon(def,imgs);
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentCheckBox = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Icon: imgs.Button.Check }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentRadioButton = function(def,imgs){
  ng_MergeDef(def,{
    Data: { Icon: imgs.Button.Radio }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.EditBox = function(def,imgs){
  ng_MergeDef(def,{
    H:28,
    Data: {
      Frame: imgs.EditFrame.EditBox,
      WrapperOptions: {
        PaddingTop: 3,
        PaddingBottom: 3,
        PaddingLeft: 3,
        PaddingRight: 3
      }
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentList = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.Frame.Inner,
      CheckImg: imgs.Image.List.Check,

      ListIndent: 0,
      DefaultIndent: 15
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.ContentTreeList = function(def,imgs){
  ng_MergeDef(def,{
    Data: { TreeImg: imgs.Image.List.Tree }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.PopupMenu = function(def,imgs){
  ng_MergeDef(def,{
    Data: {
      Frame: imgs.Frame.Outer,
      SubMenuImg: imgs.Image.Menu.SubMenu,
      CheckImg: imgs.Image.Menu.Check
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.MapBox = function(def,imgs){

  ng_MergeDef(def,{
    Data: {
      Frame: imgs.Frame.Inner
    },
    ModifyControls: {
      Copyrights:{
        R:30,W:320,T:-1,B:-1,
        IgnoreModifyIfMissing: true
      },
      Layers:{
        R:30,W:320,T:-1,B:-1,
        IgnoreModifyIfMissing: true
      },
      DrawBar:{
        R:-1,T:-1,
        IgnoreModifyIfMissing: true
      },
      ModeBar:{
        R:-1,T:-1,
        IgnoreModifyIfMissing: true
      },
      SideBar: {
        R:-1,B:-1,
        IgnoreModifyIfMissing: true
      },
      ZoomSlider: {
        L:-1,T:-1,B:-1,
        IgnoreModifyIfMissing: true,
        Events: {
          OnUpdated: bbbfly.morph.theme.frame.medium.controls._positionMap
        }
      }
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.MapSideBar = function(def,imgs){
  ng_MergeDef(def,{
    W:32,
    SectionDef: { L:0,R:0 }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.MapZoomSlider = function(def,imgs){
  ng_MergeDef(def,{
    W:28,
    Controls: {
      ZoomIn: { L:0,T:0 },
      ZoomOut: { L:0,B:0 },
      Slider: {
        L:0,R:0,T:27,B:27,
        Data: { HandleIndent: 11 },
        Controls: {
          Rail: {
            L:'50%',W:6,T:10,B:10,
            style: { marginLeft: '-3px' },
            Data: { Frame: imgs.Frame.Inner }
          },
          Handle: {
            L:'50%',W:24,H:8,
            style: {
              marginLeft: '-12px',
              marginTop: '-4px'
            },
            Data: { Frame: imgs.ButtonFrame.Handle }
          }
        }
      }
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.MapCopyrights = function(def,imgs){
  ng_MergeDef(def,{
    Controls: {
      TitlePanel: {
        L:5,R:5,T:5,H:28,
        Controls:{
          Refresh: { L:0,T:0 },
          Title: {
            H: bbbfly.morph.Title.LineHeight,
            L:33,R:33,T:0
          },
          Close: { R:0,T:0 }
        }
      },
      CopyrightsPanel: {
        L:5,R:5,T:38,B:5,
        Controls: {
          CopyrightsText: {
            L:10,R:10,T:0,
            style: {
              paddingTop: '5px',
              paddingBottom: '5px'
            }
          }
        }
      }
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.MapDrawBar = function(def,imgs){
  ng_MergeDef(def,{
    W:32,
    Data: {
      FrameDef: {
        L:0,R:0
      }
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.MapLayers = function(def,imgs){
  ng_MergeDef(def,{
    Controls: {
      TitlePanel: {
        L:5,R:5,T:5,H:28,
        Controls:{
          Refresh: { L:0,T:0 },
          Title: {
            H: bbbfly.morph.Title.LineHeight,
            L:33,R:33,T:0
          },
          Close: { R:0,T:0 }
        }
      },
      List: {
        L:5,R:5,T:38,B:5
      }
    }
  });
};

/** @ignore */
bbbfly.morph.theme.frame.medium.controls.MapModeBar = function(def,imgs){
  ng_MergeDef(def,{
    W:32,
    Data: {
      FrameDef: {
        L:0,R:0
      }
    }
  });
};

/**
 * @function
 * @name SkinControl
 *
 * @param {object} def Control definition
 * @param {object} imgs Images definition
 */
bbbfly.morph.theme.frame.medium.controls.SkinControl = function(def,imgs){
  if(!Object.isObject(def) || !Object.isObject(imgs)){return;}

  switch(def.Type){
    //panel
    case 'bbbfly.morph.ContentFrame':
      this.ContentFrame(def,imgs);
    break;
    case 'bbbfly.morph.InputFrame':
      this.InputFrame(def,imgs);
    break;
    case 'bbbfly.morph.ContentSeparator':
      this.ContentSeparator(def,imgs);
    break;
    //grid
    case 'bbbfly.morph.ContentGrid':
      this.ContentFrame(def,imgs);
    break;
    //wrapper
    case 'bbbfly.morph.ContentWrapper':
      this.ContentFrame(def,imgs);
    break;
    //bar
    case 'bbbfly.morph.ContentInputBar':
      this.InputFrame(def,imgs);
    break;
    //hint
    case 'bbbfly.morph.TextHint':
      this.TextHint(def,imgs);
    break;
    //progress
    case 'bbbfly.morph.ProgressRing':
      this.ProgressRing(def,imgs);
    break;
    case 'bbbfly.morph.ProgressBar':
      this.ProgressBar(def,imgs);
    break;
    //button
    case 'bbbfly.morph.PanelButton':
      this.PanelButton(def,imgs);
    break;
    case 'bbbfly.morph.InverseButton':
      this.InverseButton(def,imgs);
    break;
    case 'bbbfly.morph.PanelIconButton':
      this.PanelIconButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentButton':
      this.ContentButton(def,imgs);
    break;
    case 'bbbfly.morph.LargeContentButton':
      this.LargeContentButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentFlatButton':
      this.ContentFlatButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentInputButton':
      this.ContentInputButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentIconButton':
      this.ContentIconButton(def,imgs);
    break;
    case 'bbbfly.morph.ContentCheckBox':
      this.ContentCheckBox(def,imgs);
    break;
    case 'bbbfly.morph.ContentRadioButton':
      this.ContentRadioButton(def,imgs);
    break;
    //edit
    case 'bbbfly.morph.EditBox':
      this.EditBox(def,imgs);
    break;
    //list
    case 'bbbfly.morph.ContentList':
      this.ContentList(def,imgs);
    break;
    case 'bbbfly.morph.ContentTreeList':
      this.ContentTreeList(def,imgs);
    break;
    //menu
    case 'bbbfly.morph.PopupMenu':
      this.PopupMenu(def,imgs);
    break;
    //html
    case 'bbbfly.morph.HTMLContentFrame':
      this.InputFrame(def,imgs);
    break;
    //map
    case 'bbbfly.morph.MapBox':
      this.MapBox(def,imgs);
    break;
    case 'bbbfly.morph.MapSideBar':
      this.MapSideBar(def,imgs);
    break;
    case 'bbbfly.morph.MapZoomSlider':
      this.MapZoomSlider(def,imgs);
    break;
    case 'bbbfly.morph.MapCopyrights':
      this.MapCopyrights(def,imgs);
    break;
    case 'bbbfly.morph.MapDrawBar':
      this.MapDrawBar(def,imgs);
    break;
    case 'bbbfly.morph.MapLayers':
      this.MapLayers(def,imgs);
    break;
    case 'bbbfly.morph.MapModeBar':
      this.MapModeBar(def,imgs);
    break;
  }
};
