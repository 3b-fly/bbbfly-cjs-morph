/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph.map = bbbfly.morph.map || {};
bbbfly.morph.MapBox = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    Data: {
      BoundsPadding: { L:80,R:80,T:80,B:80 }
    },
    Controls: {
      Map: { L:0,R:0,T:0,B:0 }
    },
    ModifyControls: {
      Copyrights:{
        Type: 'bbbfly.morph.MapCopyrights',
        IgnoreModifyIfMissing: true
      },
      Layers:{
        Type: 'bbbfly.morph.MapLayers',
        IgnoreModifyIfMissing: true
      },
      DrawBar:{
        Type: 'bbbfly.morph.MapDrawBar',
        IgnoreModifyIfMissing: true
      },
      ModeBar:{
        Type: 'bbbfly.morph.MapModeBar',
        IgnoreModifyIfMissing: true
      },
      SideBar: {
        Type: 'bbbfly.morph.MapSideBar',
        IgnoreModifyIfMissing: true
      },
      ZoomSlider: {
        Type: 'bbbfly.morph.MapZoomSlider',
        IgnoreModifyIfMissing: true
      }
    }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,'MapBox');
  return ngCreateControlAsType(def,'bbbfly.MapBox',ref,parent);
};
bbbfly.morph.MapSideBar = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentWrapper',
    SectionDef: {
      Type: 'bbbfly.Wrapper',
      Data: {
        WrapperOptions: {
          AutoSize: true,
          TrackChanges: true
        }
      }
    },
    ButtonDef: {
      Type: 'bbbfly.morph.ContentIconButton'
    },
    Data: {
      WrapperOptions: {
        AutoSize: true,
        TrackChanges: true
      }
    },
    Controls: {
      MapControls: {
        ModifyControls: {
          Layers: {
            IgnoreModifyIfMissing: true,
            Data: { Icon: 'layers' }

          },
          Copyrights: {
            IgnoreModifyIfMissing: true,
            Data: { Icon: 'copyright' }
          }
        }
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapSideBar',ref,parent);
};
bbbfly.morph.MapZoomSlider = function(def,ref,parent){
  def = def || {};
  var theme = bbbfly.Morph.GetObjTheme(def);

  ng_MergeDef(def,{
    Controls: {
      ZoomIn: {
        Type: 'bbbfly.morph.PanelIconButton',
        style: { zIndex: 2 },
        Data: { Icon: 'plus' }
      },
      ZoomOut: {
        Type: 'bbbfly.morph.PanelIconButton',
        style: { zIndex: 2 },
        Data: { Icon: 'minus' }
      },
      Slider: {
        Type: 'bbbfly.morph.ContentFrame',
        style: { zIndex: 1 },
        Controls: {
          Rail: {
            Type: 'bbbfly.Frame',
            Data: { MorphTheme: theme ? theme.ID : null }
          },
          Handle: {
            Type: 'bbbfly.morph.InverseButton'
          }
        }
      }
    }
  });

  var rail = def.Controls.Slider.Controls.Rail;
  bbbfly.morph.misc.ApplyControlClassName(rail,'SliderRail');
  return ngCreateControlAsType(def,'bbbfly.MapZoomSlider',ref,parent);
};
bbbfly.morph.MapCopyrights = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentFrame',
    Controls: {
      TitlePanel: {
        Controls:{
          Refresh: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'refresh' }
          },
          Title: {
            Type: 'bbbfly.morph.Title',
            Data: {
              TextAlign: bbbfly.Text.textalign.center
            }
          },
          Close: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'close' }
          }
        }
      },
      CopyrightsPanel: {
        Type: 'bbbfly.morph.InputFrame',
        Controls: {
          CopyrightsText: {
            Type: 'bbbfly.morph.Text',
            Data: {
              AutoSize: bbbfly.Text.autosize.vertical
            }
          }
        }
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapCopyrights',ref,parent);
};
bbbfly.morph.MapDrawBar = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentWrapper',
    style: { zIndex: 3 },
    Data: {
      WrapperOptions:{
        AutoSize: true,
        TrackChanges: true
      },
      FrameDef: {
        Type: 'bbbfly.Wrapper',
        Data: {
          WrapperOptions: {
            AutoSize: true,
            TrackChanges: true
          }
        }
      },
      ButtonDef: {
        Type: 'bbbfly.morph.ContentIconButton'
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapDrawBar',ref,parent);
};
bbbfly.morph.MapLayers = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentFrame',
    Controls: {
      TitlePanel: {
        Controls:{
          Refresh: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'refresh' }
          },
          Title: {
            Type: 'bbbfly.morph.Title',
            Data: { TextAlign: bbbfly.Text.textalign.center }
          },
          Close: {
            Type: 'bbbfly.morph.ContentIconButton',
            Data: { Icon: 'close' }
          }
        }
      },
      List: {
        Type: 'bbbfly.morph.ContentCheckList'
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapLayers',ref,parent);
};
bbbfly.morph.MapModeBar = function(def,ref,parent){
  def = def || {};

  ng_MergeDef(def,{
    CreteFromType: 'bbbfly.morph.ContentWrapper',
    style: { zIndex: 3 },
    Data: {
      WrapperOptions:{
        AutoSize: true,
        TrackChanges: true
      },
      FrameDef: {
        Type: 'bbbfly.Wrapper',
        Data: {
          WrapperOptions: {
            AutoSize: true,
            TrackChanges: true
          }
        }
      },
      ButtonDef: {
        Type: 'bbbfly.morph.ContentIconButton'
      }
    }
  });

  return ngCreateControlAsType(def,'bbbfly.MapModeBar',ref,parent);
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_map'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapBox',bbbfly.morph.MapBox
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapSideBar',bbbfly.morph.MapSideBar
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapZoomSlider',bbbfly.morph.MapZoomSlider
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapCopyrights',bbbfly.morph.MapCopyrights
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapDrawBar',bbbfly.morph.MapDrawBar
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapLayers',bbbfly.morph.MapLayers
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.MapModeBar',bbbfly.morph.MapModeBar
    );
  }
};
