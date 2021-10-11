import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Root from "../views/Root.vue";
import UserLayout from "../layouts/UserLayout.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Root",
    component: Root,
    // beforeEnter: (to, from, next) => {
    //   if (true) {

    //   } else {

    //   }
    // }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/u",
    name: "UserLayout",
    component: UserLayout,
    beforeEnter: (to, from, next) => {
      // 1 == 1 ? next() : next("/");
      next();
    },
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Home.vue"),
      },
      {
        path: "explore",
        name: "Explore",
        component: () =>
          import(
            /* webpackChunkName: "explore" */ "../views/Explore/index.vue"
          ),
        children: [
          {
            path: "",
            name: "Foryou",
            component: () =>
              import(
                /* webpackChunkName: "foryou" */ "../views/Explore/ForYou.vue"
              ),
          },
          {
            path: "news",
            name: "News",
            component: () =>
              import(
                /* webpackChunkName: "news" */ "../views/Explore/News.vue"
              ),
          },
          {
            path: "sports",
            name: "Sports",
            component: () =>
              import(
                /* webpackChunkName: "sports" */ "../views/Explore/Sports.vue"
              ),
          },
          {
            path: "fun",
            name: "Fun",
            component: () =>
              import(/* webpackChunkName: "fun" */ "../views/Explore/Fun.vue"),
          },
          {
            path: "entertainment",
            name: "Entertainment",
            component: () =>
              import(
                /* webpackChunkName: "entertainment" */ "../views/Explore/Entertainment.vue"
              ),
          },
        ],
      },
      {
        path: "notifications",
        component: () =>
          import(
            /* webpackChunkName: "notifications" */ "../views/Notifications/index.vue"
          ),
        children: [
          {
            path: "",
            name: "All",
            component: () =>
              import(
                /* webpackChunkName: "all" */ "../views/Notifications/All.vue"
              ),
          },
          {
            path: "mentions",
            name: "Mentions",
            component: () =>
              import(
                /* webpackChunkName: "mentions" */ "../views/Notifications/Mentions.vue"
              ),
          },
        ],
      },
      {
        path: "bookmarks",
        name: "Bookmarks",
        component: () =>
          import(/* webpackChunkName: "bookmarks" */ "../views/Bookmarks.vue"),
      },
      {
        path: "lists",
        name: "Lists",
        component: () =>
          import(/* webpackChunkName: "lists" */ "../views/Lists.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () =>
          import(
            /* webpackChunkName: "profile" */ "../views/Profile/index.vue"
          ),
        children: [
          {
            path: "",
            name: "profile-tweets",
            component: () =>
              import(
                /* webpackChunkName: "profile-tweets" */ "../views/Profile/Tweets.vue"
              ),
          },
          {
            path: "with_replies",
            name: "tweets-and-replies",
            component: () =>
              import(
                /* webpackChunkName: "tweets-and-replies" */ "../views/Profile/TweetsAndReplies.vue"
              ),
          },
          {
            path: "media",
            name: "media",
            component: () =>
              import(
                /* webpackChunkName: "media" */ "../views/Profile/Media.vue"
              ),
          },
          {
            path: "likes",
            name: "likes",
            component: () =>
              import(
                /* webpackChunkName: "likes" */ "../views/Profile/Likes.vue"
              ),
          },
        ],
      },
    ],
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
