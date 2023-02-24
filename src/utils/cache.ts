/**
 * 本地缓存
 * @Date: 2023/02/07 20:28:52
 * @param key  键名
 * @param value  值
 * @param localStorage  是否是localStorage缓存
 */
export function setCache(key: string, val: any, localStorage = true) {
  if (localStorage) {
    window.localStorage.setItem(key, JSON.stringify(val));
  } else {
    window.sessionStorage.setItem(key, JSON.stringify(val));
  }
}

/**
 * 获取缓存值
 * @Date: 2023/02/07 20:33:08
 * @param key  键名
 * @param localStorage  是否是localStorage缓存
 * @returns 缓存值
 */
export function getCache(key: string, localStorage = true) {
  if (localStorage) {
    const val = window.localStorage.getItem(key);
    if (val) {
      return JSON.parse(val);
    }
  } else {
    const val = window.sessionStorage.getItem(key);
    if (val) {
      return JSON.parse(val);
    }
  }
}

/**
 * 删除本地缓存
 * @Author:付常涛
 * @param key  键名
 * @param localStorage  是否是localStorage缓存
 */
export function removeCache(key: string, localStorage = true) {
  if (localStorage) {
    window.localStorage.removeItem(key);
  } else {
    window.sessionStorage.removeItem(key);
  }
}
