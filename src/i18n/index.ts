import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

// var language = (window.navigator.userLanguage || window.navigator.language.substring(0,2))
const language = "ja";
let selection = "";

if (language) {
  selection = require("../lang/" + language + ".json");
} else {
  selection = require("../lang/en.json");
}

const messages = {
  locale: {
    message: selection,
  },
};

const i18n = new VueI18n({
  locale: "locale",
  messages,
});

export default i18n;
