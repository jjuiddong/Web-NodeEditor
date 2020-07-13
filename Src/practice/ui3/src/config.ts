//
// 2020-06-24, jjuiddong
// configuration class
//
//  - 2020-07-13
//    - TypeScript Refactoring
//
export default class Config {
  constructor() {}

  static TITLEBAR_HEIGHT = 30;
  static NODE_MARGIN_LEFT = 5;
  static NODE_MARGIN_TOP = 5;
  static NODE_ARC_RADIUS = 6;
  static NODE_BORDER_COLOR = 'rgba(0,0,0,1)';
  static NODE_HEADER_COLOR = "rgba(200,200,0,1)";
  static NODE_HEADER_COLOR2 = "rgba(255,255,0,1)";
  static NODE_BODY_COLOR = "rgba(200,200,200,1)";
  static NODE_BODY_COLOR2 = "rgba(255,255,255,1)";
  
  static SLOT_MARGIN_LEFT = 5;
  static SLOT_HEIGHT = 30;
  static SLOT_ICON_COLOR = "rgba(0,255,0,1)";
  static SLOT_ICON_COLOR_NORMAL = "rgba(0,255,0,1)";
  static SLOT_ICON_COLOR_HOVER = "rgba(255,255,0,1)";
  static SLOT_ICON_COLOR_SELECT = "rgba(255,150,0,1)";
  static SLOT_ICON_COLOR_LINK = "rgba(255,0,0,1)";
  static SLOT_ICON_RADIUS = 20 / 2;
  static SLOT_ICON_SPACE_WIDTH = Config.SLOT_ICON_RADIUS * 2 + 5;
  static SLOT_TEXT_BASE_OFFSET = 5; // text y base offset
  
  static WIDGETS_MARGIN_LEFT = 5;
  static WIDGETS_MARGIN_TOP = 5;
  static WIDGETS_HEIGHT = 30;
  static WIDGETS_BG_COLOR = 'rgba(0,0,0,1)';
  static WIDGETS_TEXT_COLOR = 'rgba(255,255,255,1)';
  static WIDGETS_TEXT_BASE_OFFSET = 5; // text y base offset
  
  static CONTEXTMENU_ITEM_HEIGHT = 26;
  
  //Config.POPUP_INPUT_HEIGHT = 50;  
};
