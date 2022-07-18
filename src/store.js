/*
 * @Author: Code-HHX
 * @Date: 2022-03-24 11:49:13
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-03-24 12:17:43
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    //#region 授权令牌无效，请重新登录
    async tokenExpired({ commit }) {
      //清空store
      //清空缓存
      localStorage.clear();
      router.replace({
        name: "Home" //返回首页
      });
    }
    //#endregion
  },
  getters: {},
  modules: {}
});
