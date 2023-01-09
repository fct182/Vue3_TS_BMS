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
createApp(App).use(router).use(pinia).mount('#app');
