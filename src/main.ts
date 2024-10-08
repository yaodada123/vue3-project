import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import router from './router';
// 引入pinia
import pinia from "./store/index.ts"
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn
})
app.use(router);
// 导入svg插件
import 'virtual:svg-icons-register';

import gloablComponent from './components/index';
import './styles/index.scss';
app.use(gloablComponent);
app.use(pinia);
app.mount('#app')
