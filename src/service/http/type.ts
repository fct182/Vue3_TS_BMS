import { AxiosRequestConfig, AxiosResponse } from 'axios';

// 拦截器Interface
export interface IHttpInterceptors {
  requestSuccessInterceptors?: (
    config: AxiosRequestConfig
  ) => AxiosRequestConfig;
  requestErrorInterceptors?: (error: any) => any;
  responseSuccessInterceptors?: (res: AxiosResponse) => AxiosResponse;
  responseErrorInterceptors?: (error: any) => any;
}

// Http的config接口
export interface IHttpAxiosRequestConfig extends AxiosRequestConfig {
  // 拦截器对象
  interceptors?: IHttpInterceptors;
}

/**
 * 请求返回的数据类型
 */
export interface DataType {
  data: any;
  returnCode: string;
  success: boolean;
}
