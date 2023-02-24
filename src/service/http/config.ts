// axios的配置对象
const config = {
  // 请求的基础地址
  baseURL: '',
  // 指定请求超时的毫秒数
  timeout: 3000
};

// 通过环境配置
if (process.env.NODE_ENV === 'development') {
  // config.baseURL = 'http://123.207.32.32:8000/';
  config.baseURL = '/api';
} else if (process.env.NODE_ENV === 'production') {
  config.baseURL = '';
} else if (process.env.NODE_ENV === 'test') {
  config.baseURL = '';
}

export default config;
