/*
 * @Author: Code-HHX
 * @Date: 2022-03-24 11:49:13
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-03-24 16:02:24
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {},
    auth: false //是否登录鉴权
  },
  {
    path: "*",
    redirect: {
      name: "home"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  //to要跳转到的路径
  //from从哪个路径来
  //next往下执行的回调
  //在localStorage中获取token

  let token = window.localStorage.getItem("ikrusher-token");
  let userInfo = window.localStorage.getItem("userInfo");

  //判断该页面是否需要登录
  if (to.meta.auth) {
    //如果token存在直接跳转
    if (token) {
      //Store.commit("setLoginInfo", userInfo);
      next();
    } else {
      next({
        path: "/",
        //跳转时传递参数到登录页面，以便登录后可以跳转到对应页面
        query: {
          redirect: to.fullPath
        }
      });
    }
  } else {
    //如果不需要登录鉴权，则直接跳转到对应页面
    next();
  }
});

export default router;
