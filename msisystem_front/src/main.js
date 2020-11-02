import Vue from "vue";
import App from "./App.vue";
import VueRouter from "./router";
import store from "./store";
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './style/default.css'
Vue.use(ViewUI);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)

const router = VueRouter()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
