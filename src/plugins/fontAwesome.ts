import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faComment,
  faEllipsisH,
  faHeart,
  faRetweet,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment as farComment,
  faHeart as farHeart,
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
  farHeart
);

Vue.component("Fa", FontAwesomeIcon);
console.log("Run");
