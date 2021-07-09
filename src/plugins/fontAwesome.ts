import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faComment,
  faEllipsisH,
  faHashtag,
  faHeart,
  faHome,
  faIgloo,
  faRetweet,
  faShare,
  faBell,
  faEnvelope,
  faBookmark,
  faStickyNote,
  faUser,
  faHandHoldingHeart,
  faChartLine,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment as farComment,
  faHeart as farHeart,
  faBell as farBell,
  faEnvelope as farEnvelope,
  faBookmark as farBookmark,
  faStickyNote as farStickyNote,
  faUser as farUser,
  faImage as farImage,
  faSmile as farSmile,
  faCalendarAlt as farCalendarAlt,
  faSun as farSun,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";

library.add(
  faCoffee,
  faEllipsisH,
  faComment,
  faRetweet,
  faHeart,
  faShare,
  farComment,
  farHeart,
  faHome,
  faIgloo,
  faHashtag,
  faBell,
  farBell,
  faEnvelope,
  farEnvelope,
  faBookmark,
  farBookmark,
  faStickyNote,
  farStickyNote,
  faUser,
  farUser,
  farImage,
  faHandHoldingHeart,
  faChartLine,
  farSmile,
  farCalendarAlt,
  farSun,
  faSearch
);

Vue.component("Fa", FontAwesomeIcon);
console.log("Run");
