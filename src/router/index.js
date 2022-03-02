import Vue from "vue";
import VueRouter from "vue-router";

//TODO: Импортировать страницы через ленивую загрузку
import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import Investing from "../pages/InvestingPage.vue";
import Business from "../pages/BusinessPage.vue";
import News from "../pages/NewsPage.vue";
import NewsArticle from "../pages/NewsPageArticle.vue";

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
  {
    path: "/news/:id",
    name: "News-Article",
    component: NewsArticle,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return {
        y: 0,
        x: 0,
      };
    }
  },
});

export default router;
