import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from './store/index'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false;
fastClick.attach(document.body);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
