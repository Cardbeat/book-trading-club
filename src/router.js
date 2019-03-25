import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import Dashboard from "./views/Dashboard.vue";
import Profile from "./views/Profile.vue";
import History from "./views/History.vue";
import Books from "./views/Books.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/books",
      name: "books",
      component: Books
    },
    {
      path: "/history",
      name: "history",
      component: History
    }
  ]
});
