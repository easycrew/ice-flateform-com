  /**
   * 截取URL参数
   * @param {string} name 截取的key
   * @param {string} [url] 被截取的url
   * @returns {string} 截取的val
   */
  export const urlParam = (name, url) => {
    let reg = new RegExp(".*[&?]" + name + "=([^&]*)(&|$)");
    let r;
    if (!url) {
      r = window.location.search.match(reg);
    } else {
      r = url.match(reg);
    }
    if (r) return decodeURIComponent(r[1]);
    return '';
  };

  /**
   * 判断是否是手机号
   * @param {string} val 传进来的字符串
   * @returns {Boolean} 是否匹配
   */
  export const isMobile = (val) => {
    let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(val);
  };

  /**
   * 设置项目名称
   * @returns {string} 项目名称val
   */
  export const sysName = () => {
    return '捷越联合平台管理系统'
  };
  /**
   * 设置本地数据
   * @param key
   * @param value
  */
  export const setLocalData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  /**
   * 获取本地数据
   * @param key
   * @returns {*}
   */
  export const getLocalData = (key) => {
    const value = localStorage.getItem(key);
    if (value)
        return JSON.parse(localStorage.getItem(key));
    return value;
  };
  /**
   * 根据key, 清除本地某个数据
   * @param key
   */
  export const removeLocalData = (key) => {
    localStorage.removeItem(key);
  };
  /**
   * 删除所有本地保存的数据
   */
  export const clearLocalData = () => {
    localStorage.clear();
  };
  /**
   * token key
   * @type {string}
   */
  const TOKEN_KEY = "token";

  /**
   * 用户本地存储信息
   * @type {json}
   */
  const USER_INFO_KEY = "USER_INFO";

  /**
   * 保存登录状态token
   * @param token
   */
  export const setUserToken = (token) => {
    setLocalData(TOKEN_KEY, token)
  };

  /**
  * 获取用户本地的token
  * @returns {any}
  */
  export const getUserToken = () => {
    return getLocalData(TOKEN_KEY);
  };

  /**
  * 清除用户token
  */
  export const clearUserToken = () => {
    clearLocalData();
  };

  /**
  * 保存用户信息
  * @returns {any}
  */
  export const setUserInfo = (userInfo) => {
    setLocalData(USER_INFO_KEY, userInfo)
  };
  /**
  * 获取用户信息
  * @returns {any}
  */
  export const getUserInfo = () => {
    return getLocalData(USER_INFO_KEY);
  };

