<!--
 * @Author: Code-HHX
 * @Date: 2022-03-24 11:49:13
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-03-24 12:12:57
 * @Description: 
-->
<template>
  <div id="app">
    <keep-alive v-if="isLoggedIn">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
import { KEY_LOCAL_STORAGE_TOKEN } from "@/config/LocalStoreKey";
export default {
  name: "home",
  data() {
    return {
      isLoggedIn: false
    };
  },
  watch: {
    //退出登录移除keep-alive
    $route(to, from) {
      // if the route changes...
      let token = localStorage.getItem(KEY_LOCAL_STORAGE_TOKEN);
      if (!this.$utils.isNullAndEmpty(token)) {
        // firebase returns null if user logged out
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}

//web app 全局隐藏滚动条
* {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-track {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: none;
  }
  &::-webkit-scrollbar-thumb:active {
    background-color: none;
  }
}

//web app 全局禁用长按选中放大 复制
img,
div {
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
