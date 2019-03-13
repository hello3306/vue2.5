import Vue from 'vue'
import App from './App.vue'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import fastClick from 'fastclick'

Vue.config.productionTip = false;
fastClick.attach(document.body);
new Vue({
    render: h => h(App),
}).$mount('#app')
