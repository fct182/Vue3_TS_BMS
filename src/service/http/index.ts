import axios, { AxiosInstance } from 'axios';
// 引入类型
import { IHttpAxiosRequestConfig, IHttpInterceptors } from './type';

import { ElLoading } from 'element-plus';
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading';
// 引入样式（element-plus按需引入不会引入样式--坑！！）
// import 'element-plus/theme-chalk/el-loading.css';

// 封装的Axios类
class HttpRequest {
  /**
   * axios实例
   */
  instance: AxiosInstance;
  /**
   * 拦截器对象
   */
  interceptors?: IHttpInterceptors;
  /**
   * loading对象
   */
  loading?: LoadingInstance;
  // 构造方法
  constructor(config: IHttpAxiosRequestConfig) {
    // 创建一个新的实例
    this.instance = axios.create(config);
    // 备份完整的拦截器对象
    this.interceptors = config.interceptors;

    // 装载（config配置中的）拦截器：请求拦截
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessInterceptors,
      config.interceptors?.requestErrorInterceptors
    );
    // 装载（config配置中的）拦截器: 响应拦截
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessInterceptors,
      config.interceptors?.responseErrorInterceptors
    );

    // 装载公有拦截器---所有实例都有
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例的请求成功拦截器');
        // 发起请求时，加载Loading
        this.loading = ElLoading.service({
          lock: true,
          text: '正在卖力加载中....'
        });
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例的响应成功拦截器');
        // if (!res.data.success) {
        //   // 弹框提示,请求失败叭啦
        // }
        // 移除请求Loading
        this.loading?.close();
        return res.data;
      },
      (err) => {
        console.log('所有实例的响应失败拦截器');
        // err.response
        // 通过判断返回的数据的code，msg提示

        // 移除请求Loading
        this.loading?.close();
        return Promise.reject(err);
      }
    );
  }

  // 定义方法
  request<T>(config: IHttpAxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      try {
        // 某个请求的私有请求成功的拦截器
        if (config.interceptors?.requestSuccessInterceptors) {
          config = config.interceptors.requestSuccessInterceptors(config);
        }

        this.instance.request(config).then((res) => {
          // 某个请求的私有响应成功的拦截器
          if (config.interceptors?.responseSuccessInterceptors) {
            res = config.interceptors.responseSuccessInterceptors(res);
          }
          // 存储返回值，DataType类型
          const result: any = res;
          resolve(result);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  get<T>(config: IHttpAxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'Get' });
  }
  post<T>(config: IHttpAxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'Post' });
  }
  patch<T>(config: IHttpAxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'Patch' });
  }
  delete<T>(config: IHttpAxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'delete' });
  }
}

export default HttpRequest;
