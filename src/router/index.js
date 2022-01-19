import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import Investing from "../pages/InvestingPage.vue";
import Business from "../pages/BusinessPage.vue";
import News from "../pages/NewsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/investing",
    name: "Investing",
    component: Investing,
  },
  {
    path: "/business",
    name: "Business",
    component: Business,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
