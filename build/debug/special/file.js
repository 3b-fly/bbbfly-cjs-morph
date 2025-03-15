/*!
 * @author Jan Nejedly support@3b-fly.eu
 * @copyright Jan Nejedly
 * @version 1.0.3
 * @license see license in 'LICENSE' file
*/

var bbbfly = bbbfly || {};
bbbfly.morph = bbbfly.morph || {};
bbbfly.morph._fileUploader = function(def,ref,parent,className,type){
  def = def || {};

  ng_MergeDef(def,{
    Controls: {
      ButtonsPanel: {
        L:8,R:7,H:38,T:0,
        Data: {
          OverflowX: bbbfly.Renderer.overflow.visible,
          OverflowY: bbbfly.Renderer.overflow.visible
        },
        Controls: {
          AddFiles: {
            Type: 'bbbfly.morph.ContentButton',
            L:-3,W:'50%',T:5,H:28,
            Data: {
              TextAlign: bbbfly.Button.textalign.center
            }
          },
          RemoveFiles: {
            Type: 'bbbfly.morph.ContentButton',
            R:-2,W:'50%',T:5,H:28,
            Data: {
              TextAlign: bbbfly.Button.textalign.center
            }
          }
        }
      },
      ContentPanel: {
        L:5,R:5,T:43,B:5,
        Controls: {
          FilesList: {
            Type: 'bbbfly.morph.ContentList',
            L:0,R:0,T:0,B:0
          }
        }
      },
      ProgressPanel: {
        Type: 'bbbfly.morph.ContentPanel',
        Controls: {
          ProgressBar: {
            Type: 'bbbfly.morph.ProgressBar',
            L:20,R:20,T:'50%',
            style: { marginTop: '-15px' }
          },
          ProgressMessage: {
            Type: 'bbbfly.morph.Label',
            L:5,R:5,T:'50%',
            style: { marginTop: '10px' },
            Data: {
              TextAlign: bbbfly.Text.textalign.center,
              AutoSize: bbbfly.Text.autosize.vertical
            }
          }
        }
      }
    }
  });

  bbbfly.morph.misc.ApplyControlClassName(def,className);
  return ngCreateControlAsType(def,type,ref,parent);
};
bbbfly.morph.FileUploader = function(def,ref,parent){
  return bbbfly.morph._fileUploader(
    def,ref,parent,
    'FileUploader','bbbfly.FileUploader'
  );
};
bbbfly.morph.FileLoader = function(def,ref,parent){
  return bbbfly.morph._fileUploader(
    def,ref,parent,
    'FileUploader','bbbfly.FileLoader'
  );
};
ngUserControls = ngUserControls || new Array();
ngUserControls['bbbfly_morph_file'] = {
  OnInit: function(){
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.FileUploader',bbbfly.morph.FileUploader
    );
    bbbfly.Morph.RegisterControlType(
      'bbbfly.morph.FileLoader',bbbfly.morph.FileLoader
    );
  }
};
