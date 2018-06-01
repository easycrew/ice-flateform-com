import axios from 'axios';
import * as Tools from './tools';
import { Feedback } from "@icedesign/base";
import jsonwebtoken from "jsonwebtoken";
import Qs from 'qs';
import { hashHistory } from 'react-router';

/**
 * 请求超时, 单位毫秒, 默认8秒
 * @type {number}
 */
const REQUEST_TIMEOUT = 6000;
const JSON = "application/json; charset=UTF-8";
const FORM = "application/x-www-form-urlencoded; charset=UTF-8";
const Toast = Feedback.toast;

// 创建axios实例
const Axios = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: REQUEST_TIMEOUT, // 请求超时时间
  })
  
  // request拦截器
  Axios.interceptors.request.use(
    config => {
    // Do something before request is sent
    let token = Tools.getUserToken();
    if (token) {
      config.headers['access_token'] = token 
    }
    config['Accept'] = 'application/json';
    config['Content-Type'] = FORM;
    // config里面有这个transformRquest，这个选项会在发送参数前进行处理。
    // 这时候我们通过Qs.stringify转换为表单查询参数
    config['transformRequest'] = [function (data) {
      data = Qs.stringify(data);
      return data;
    }];
    return config
  }, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  })
  
  /**
   * respone拦截器
   * 50008:非法的token; 50012:其他客户端登录了; 50014:Token 过期了; 0: 成功
   * 50008 | 50012 | 50014 | 0
   */
  Axios.interceptors.response.use(
    response => {
      const res = response.data;
    if(res.code !== 0){
      Toast.error(res.msg);
    }
    // else if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //   // Token 异常
      
    // }
    else{
      return res
    }
    /**
    * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
    * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
    */
  //  const res = response.data;
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  
  },error => {
      const status = error.response.status;
      // Toast.error("请求失败");
      // if(403 == status){
      //   hashHistory.push("/error");
      // }else if(404 == status){
      //   hashHistory.push("/notFound");
      // }else{
      //   hashHistory.push("/exception");
      // }

      return false;

      // console.log('err' + error)// for debug
      // Message({
      //   message: error.message,
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // return Promise.reject(error)
    }
  )

export default Axios