// const
const MAPBOX_TOKEN =
   'pk.eyJ1IjoiZ3VzdHl5IiwiYSI6ImNsdWpsYzlmbzBnNWUyaW9sNDNpM2FnMmkifQ.3HwFat2ipZRq9vSBXAAyvA';
const MUNICIPALITY_CITIES_ARR = [
   '北京市',
   '上海市',
   '天津市',
   '重慶市',
   '香港特別行政區',
   '澳門特別行政區',
];
const MAP_LAYER_LIST = [
   'road-label',
   'waterway-label',
   'natural-line-label',
   'natural-point-label',
   'water-line-label',
   'water-point-label',
   'poi-label',
   'airport-label',
   'settlement-subdivision-label',
   'settlement-label',
   'state-label',
   'country-label',
];

const USE_GOOGLE_ANALYTICS = false;
const GOOGLE_ANALYTICS_TRACKING_ID = '';

// styling: set to `true` if you want dash-line route
const USE_DASH_LINE = false;
// styling: route line opacity: [0, 1]
const LINE_OPACITY = 0.8;
// styling: map height
const MAP_HEIGHT = 600;
//set to `false` if you want to hide the road label characters
const ROAD_LABEL_DISPLAY = true;
//set to `true` if you want to display only the routes without showing the map.
const PRIVACY_MODE = false;
//set to `false` if you want to make light off as default, only effect when `PRIVACY_MODE` = false
const LIGHTS_ON = true;

// IF you outside China please make sure IS_CHINESE = false
const IS_CHINESE = true;
const USE_ANIMATION_FOR_GRID = false;
const CHINESE_INFO_MESSAGE = (yearLength: number, year: string): string => {
   const yearStr = year === 'Total' ? '所有' : ` ${year} `;
   return `我用 App 記錄自己跑步 ${yearLength} 年了，下面列表展示的是${yearStr}的數據`;
};
const ENGLISH_INFO_MESSAGE = (yearLength: number, year: string): string =>
   `跑步是一個天天都存在的大問號,它會問你：『你今天要當膽小鬼，還是要堅強 ?』—前加拿大馬拉松選手，彼得.馬赫`;

// not support English for now
const CHINESE_LOCATION_INFO_MESSAGE_FIRST =
   '跑步是一個天天都存在的大問號,它會問你：『你今天要當膽小鬼，還是要堅強 ?』—前加拿大馬拉松選手，彼得.馬赫';
const CHINESE_LOCATION_INFO_MESSAGE_SECOND = '當你感到疲憊時，想著為什麼當初開始。';

const INFO_MESSAGE = IS_CHINESE ? CHINESE_INFO_MESSAGE : ENGLISH_INFO_MESSAGE;
const FULL_MARATHON_RUN_TITLE = IS_CHINESE ? '全程馬拉松' : 'Full Marathon';
const HALF_MARATHON_RUN_TITLE = IS_CHINESE ? '半程馬拉松' : 'Half Marathon';
const MORNING_RUN_TITLE = IS_CHINESE ? '清晨跑步' : 'Morning Run';
const MIDDAY_RUN_TITLE = IS_CHINESE ? '午間跑步' : 'Midday Run';
const AFTERNOON_RUN_TITLE = IS_CHINESE ? '午後跑步' : 'Afternoon Run';
const EVENING_RUN_TITLE = IS_CHINESE ? '傍晚跑步' : 'Evening Run';
const NIGHT_RUN_TITLE = IS_CHINESE ? '夜晚跑步' : 'Night Run';

const RUN_TITLES = {
   FULL_MARATHON_RUN_TITLE,
   HALF_MARATHON_RUN_TITLE,
   MORNING_RUN_TITLE,
   MIDDAY_RUN_TITLE,
   AFTERNOON_RUN_TITLE,
   EVENING_RUN_TITLE,
   NIGHT_RUN_TITLE,
};

export {
   USE_GOOGLE_ANALYTICS,
   GOOGLE_ANALYTICS_TRACKING_ID,
   CHINESE_LOCATION_INFO_MESSAGE_FIRST,
   CHINESE_LOCATION_INFO_MESSAGE_SECOND,
   MAPBOX_TOKEN,
   MUNICIPALITY_CITIES_ARR,
   MAP_LAYER_LIST,
   IS_CHINESE,
   ROAD_LABEL_DISPLAY,
   INFO_MESSAGE,
   RUN_TITLES,
   USE_ANIMATION_FOR_GRID,
   USE_DASH_LINE,
   LINE_OPACITY,
   MAP_HEIGHT,
   PRIVACY_MODE,
   LIGHTS_ON,
};

const nike = 'rgb(224,237,94)'; // if you want change the main color change here src/styles/variables.scss

// If your map has an offset please change this line
// issues #92 and #198
export const NEED_FIX_MAP = false;
export const MAIN_COLOR = nike;
export const PROVINCE_FILL_COLOR = '#47b8e0';
