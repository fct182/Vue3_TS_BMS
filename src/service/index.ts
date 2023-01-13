import HttpRequest from './http';
import config from './http/config';

// 开发环境使用的axios网络请求
const devHttp = new HttpRequest({
  ...config,
  interceptors: {
    requestSuccessInterceptors(config) {
      // 携带Token
      const token = 'abc';
      if (token && typeof config.headers?.set === 'function') {
        config.headers.set('Authorization', `Bearer ${token}`);
      }
      console.log('请求成功的回调', config);
      return config;
    },
    requestErrorInterceptors(err) {
      console.log(err);
      return Promise.reject(err);
    },
    responseSuccessInterceptors(res) {
      console.log('响应成功的回调', res);
      return res;
    },
    responseErrorInterceptors(err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
});

export { devHttp as $http };
