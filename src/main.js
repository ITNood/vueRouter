// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import infiniteScroll from 'vue-infinite-scroll'
import 'swiper/css/swiper.min.css';


import '@/utils/global'//全局
// 控制路由表的js文件
import '@/permission.js'
Vue.config.productionTip = false
Vue.use(ElementUI).use(infiniteScroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
