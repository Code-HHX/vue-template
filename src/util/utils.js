/*
 * @Author: Code-HHX
 * @Date: 2022-04-19 10:32:17
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-04-19 14:43:15
 * @Description:常用工具类
 */

//#region 验证变量是否为空 isNullAndEmpty
export function isNullAndEmpty(obj) {
  if (
    obj == null ||
    obj == "" ||
    obj == undefined ||
    obj.trim() == "" ||
    obj == "null"
  ) {
    return true;
  } else {
    return false;
  }
}
//#endregion

//#region 验证邮箱格式 isEmail
export function isEmail(str) {
  var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return reg.test(str);
}
//#endregion

//#region 长按触发函数指令 v-press
/*
  1.组件内导入
  import press from "@/util/utils";

  2.组件内绑定指令
  directives: {
    press
  }

  3.v-press="() => {handleClickLong(index)}"
*/
export const press = {
  bind: function(el, binding, vNode) {
    //log(el, binding, vNode);
    // el就是dom
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    // 定义变量
    let pressTimer = null;
    // 创建计时器（ 2秒后执行函数 ）
    let start = e => {
      if (e.type === "click" && e.button !== 0) {
        return;
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler();
        }, 1000);
      }
    };
    // 取消计时器
    let cancel = e => {
      // log(e);
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = e => {
      binding.value(e);
    };
    // 添加事件监听器
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    // 取消计时器
    el.addEventListener("click", cancel);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("touchcancel", cancel);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener("click", el.handler);
  }
};
//#endregion

//#region 深拷贝数据 deepCopy
export function deepCopy(data) {
  //string,number,bool,null,undefined,symbol
  //object,array,date,RegExp
  if (data && typeof data === "object") {
    //针对函数的拷贝
    if (typeof data === "function") {
      let tempFunc = data.bind(null);
      tempFunc.prototype = deepCopy(data.prototype);
      return tempFunc;
    }

    switch (Object.prototype.toString.call(data)) {
      case "[object String]":
        return data.toString();
      case "[object Number]":
        return Number(data.toString());
      case "[object Boolean]":
        return new Boolean(data.toString());
      case "[object Date]":
        return new Date(data.getTime());
      case "[object Array]":
        var arr = [];
        for (let i = 0; i < data.length; i++) {
          arr[i] = deepCopy(data[i]);
        }
        return arr;
      case "[object RegExp]":
        return new RegExp(data);

      //js自带对象或用户自定义类实例
      case "[object Object]":
        var obj = {};
        for (let key in data) {
          //会遍历原型链上的属性方法，可以用hasOwnProperty来控制 （obj.hasOwnProperty(prop)
          obj[key] = deepCopy(data[key]);
        }
        return obj;
    }
  } else {
    //string,number,bool,null,undefined,symbol
    return data;
  }
}
//#endregion

//#region 开发模式日志 devLog
export default function devLog(message) {
  if (process.env.NODE_ENV === "dev") {
    console.log(message);
  }
}
//#endregion
