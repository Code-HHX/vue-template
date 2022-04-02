/*
 * @Author: Code-HHX
 * @Date: 2022-03-24 13:54:24
 * @LastEditors: Code-HHX
 * @LastEditTime: 2022-04-01 17:51:03
 * @Description:
 */

import axios from "axios";
import store from "../store.js";

//封装axios
axios.defaults.headers["Content-Type"] = "application/json";

//创建axios实例
const service = axios.create({
  baseURL:
    process.env.NODE_ENV == "dev" ? "/api" : process.env.VUE_APP_BASE_API, //本地测试跨域配置
  timeout: 130000, //请求超时
  withCredentials: true //跨域请求时发送Cookie
});

/**
 * 封装请求
 * 请求拦截、响应拦截、异常统一处理
 */

//const ASCRIPTION = "ASCRIPTION";
const TIME_ZONE = "timeZone";
//const SOURCE = "source";

//http request 拦截器
service.interceptors.request.use(
  config => {
    //获取token
    //const token = window.localStorage.getItem("token");

    let timezone = new Date().getTimezoneOffset() / -60;
    if (timezone > 0) {
      timezone = `+${timezone}:00`;
    } else {
      timezone = `${timezone}:00`;
    }
    config.headers[TIME_ZONE] = timezone;

    window.console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.data.code;
    if (code === 401) {
      store.dispatch("tokenExpired");
    } else if (code === 500) {
      return null;
    } else if (code === 404) {
      return null;
    } else if (code === 200) {
      //接口请求正常 直接返回结果
      return response;
    }

    //接口请求异常，抛出异常信息
    // Toast.fail({
    // 	duration: 2000,
    // 	message: response.data.message,
    // 	closeOnClick: false,
    // 	closeOnClickOverlay: false,
    // })
    return Promise.reject(response.data.message);
  },
  error => {
    //接口请求异常，抛出异常信息
    // Toast.fail({
    // 	duration: 2000,
    // 	message: error.data.message,
    // 	closeOnClick: false,
    // 	closeOnClickOverlay: false,
    // })
    return Promise.reject(error);
  }
);

//#region Get请求(Json)
export function requestGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url: url,
      method: "get",
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
//#endregion

//#region Post请求(Json)
export function requestPost(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url: url,
      method: "post",
      data: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
//#endregion

//#region Post请求(form表单提交)
export function requestPostForm(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url: url,
      method: "post",
      data: null,
      params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
//#endregion

//#region Post请求(文件上传)
export function requestFileUpload(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      url: url,
      method: "post",
      data: params,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
//#endregion
