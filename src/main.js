import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false;
fastClick.attach(document.body);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
