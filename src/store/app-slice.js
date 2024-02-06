import { createSlice } from "@reduxjs/toolkit";
import appConfig from "./settings";

const initialAppState = {
  pageData: {
    page: "",
    data: [],
  },
  menuList: [],
  relatedWebInfo: [],
  webInfo: [],
  editData: null,
  pulseLoading: false,
  spawnLoading: false,
  isDevMode: appConfig.isDevMode,
  isBounceActive: false,
  isSpawnActive: false,
  isNavsideCollapse: false,
  defaultLanguage: appConfig.language,
  language: localStorage.lngActive
    ? localStorage.lngActive
    : appConfig.language,
  languageAvailable: appConfig.languageAvailable,
  languageData: [],
  languageContent: {},
  timeZone: appConfig.timeZone,
  apiPath: appConfig.apiPath,
  uploadPath: appConfig.uploadPath,
  webPath: appConfig.webPath,
  randomString: "",
  pages: appConfig.pages,
  features: appConfig.features,
  mailInbox: 0,
  contactMs: 0,
  visitors: 0,
  frontOffice: {
    pageAvailable: [],
  },
};

const appSlice = createSlice({
  name: "app",
  initialState: initialAppState,
  reducers: {
    setPageData(state, action) {
      state.pageData = {
        page: action.payload[0],
        data: action.payload[1],
      };
    },
    setEditData(state, action) {
      state.editData = action.payload;
    },
    changeLanguage(state, action) {
      state.language = action.payload;
    },
    frontOffifcePageInit(state, action) {
      state.frontOffice.pageAvailable = action.payload;
    },
    toggleNavsideCollapse(state, action) {
      if (action.payload !== undefined) {
        state.isNavsideCollapse = action.payload;
      } else {
        state.isNavsideCollapse = !state.isNavsideCollapse;
      }
    },
    isBounceActive(state, action) {
      if (action.payload !== undefined) {
        state.isBounceActive = action.payload;
      } else {
        state.isBounceActive = !state.isBounceActive;
      }
    },
    isSpawnActive(state, action) {
      if (action.payload !== undefined) {
        state.isSpawnActive = action.payload;
      } else {
        state.isSpawnActive = !state.isSpawnActive;
      }
    },
    momentFormat(state, action) {
      return action.payload;
    },
    randomString(state, action) {
      let string = "";
      let length = action.payload.length;
      let characters = `${action.payload.text}ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`;
      let charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        string += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      state.randomString = string.replaceAll(" ", "");
    },
    getMailInbox(state, action) {
      state.mailInbox = action.payload.mails.length;
      state.contactMs = action.payload.contactMs.length;
    },
    setLanguageData(state, action) {
      state.languageData = action.payload;
    },
    setMenuList(state, action) {
      state.menuList = action.payload;
    },
    setRelatedWebInfo(state, action) {
      state.relatedWebInfo = action.payload;
    },
    setWebInfo(state, action) {
      state.webInfo = action.payload;
    },
    setSpawnLoading(state, action) {
      if (action.payload !== undefined) {
        state.spawnLoading = action.payload;
      } else {
        state.spawnLoading = !state.spawnLoading;
      }
    },
    setPulseLoading(state, action) {
      state.pulseLoading = action.payload;
    },
    setVisitor(state, action) {
      state.visitors = action.payload;
    },
    setLanguageContent(state, action) {
      state.languageContent = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export default appSlice;
