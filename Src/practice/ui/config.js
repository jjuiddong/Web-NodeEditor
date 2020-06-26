//
// 2020-06-24, jjuiddong
// configuration class
//
const Config = class {
  constructor() {}
};

Config.TITLEBAR_HEIGHT = 30;
Config.WINDOW_MARGIN_LEFT = 5;
Config.WINDOW_MARGIN_TOP = 5;
Config.WINDOW_ARC_RADIUS = 6;
Config.WINDOW_BORDER_COLOR = 'rgba(0,0,0,1)';

Config.SLOT_MARGIN_LEFT = 5;
Config.SLOT_HEIGHT = 30;
Config.SLOT_ICON_COLOR = "rgba(0,255,0,1)";
Config.SLOT_ICON_COLOR_NORMAL = "rgba(0,255,0,1)";
Config.SLOT_ICON_COLOR_HOVER = "rgba(255,255,0,1)";
Config.SLOT_ICON_COLOR_SELECT = "rgba(255,0,0,1)";
Config.SLOT_ICON_RADIUS = 20 / 2;
Config.SLOT_ICON_SPACE_WIDTH = Config.SLOT_ICON_RADIUS * 2 + 5;
Config.SLOT_TEXT_BASE_OFFSET = 5; // text y base offset