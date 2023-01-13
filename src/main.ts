import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 导入Pinia
import pinia from './store';

// 全局导入Element-Plus
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

// 全局导入
// createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app');

// 引入封装好的axios
import { $http } from './service';
import { DataType } from './service/http/type';

createApp(App).use(router).use(pinia).mount('#app');

// $http
//   .request({
//     url: '/home/multidata',
//     method: 'GET',
//     interceptors: {
//       requestSuccessInterceptors(config) {
//         console.log('单个请求的请求成功的回调');
//         return config;
//       },
//       responseSuccessInterceptors(res) {
//         console.log('单个请求的响应成功的回调');
//         return res;
//       }
//     }
//   })
//   .then((res) => {
//     console.log('mian.ts', res.data);
//   });

// $http
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET'
//   })
//   .then((res) => {
//     console.log('获取的数据', res.data, res.returnCode, res.success);
//   });
$http
  .get<DataType>({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log('获取的数据', res.data, res.returnCode, res.success);
  });
