const appConfigDEV = {
  isDevMode: false,
  language: "th",
  timeZone: "Asia/Bangkok",
  languageAvailable: ["th", "en"],
  apiPath: "http://localhost:8000/api/frontapi/",
  uploadPath: "http://localhost:8000/",
  webPath: "http://localhost:5173/",
  // apiPath:"http://192.168.1.55:8000/api/backoffice/v1/",
  // uploadPath:"http://192.168.1.55:8000/",
  // webPath:"http://192.168.1.55:8000/",
};

const appConfigPROD = {
  isDevMode: false,
  language: "th",
  timeZone: "Asia/Bangkok",
  languageAvailable: ["th", "en"],
  apiPath: "https://api.juppgas-delivery.shop/api/frontapi/",
  uploadPath: "https://api.juppgas-delivery.shop/",
  webPath: "https://juppgas-delivery.shop/",
  // apiPath: "https://rehab.md.kku.ac.th/api/api/frontapi/",
  // uploadPath: "https://rehab.md.kku.ac.th/api/",
  // webPath: "https://rehab.md.kku.ac.th/",
};

// export default appConfigDEV;
export default appConfigPROD;
