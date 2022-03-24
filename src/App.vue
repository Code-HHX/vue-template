<!--
 * @Author: Code-HHX
 * @Date: 2022-03-24 11:49:13
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-03-24 12:12:57
 * @Description: 
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name:'home',
  data(){
    return{
      
    }
  },
  mounted(){
    //#region 滚动 使输入框处在窗口的中间高度
    /*
		window.onresize = function () {
			document.activeElement.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			})
		}
    */
    //#endregion
  },
}
</script>

<style lang="less" scoped>
body{
  margin: 0;
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
