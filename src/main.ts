import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// 导入Pinia
import pinia from './store';

// 格式化样式
import 'normalize.css';

// 全局导入Element-Plus
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';

// 全局导入
// createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app');

// 引入封装好的axios
// import { $http } from './service';
// import { DataType } from './service/http/type';
// collapse
import { ElCollapseTransition } from 'element-plus';
// fade/zoom
import 'element-plus/theme-chalk/base.css';

createApp(App)
  .use(router)
  .use(pinia)
  .component(ElCollapseTransition.name, ElCollapseTransition)
  .mount('#app');
