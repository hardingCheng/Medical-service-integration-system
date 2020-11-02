import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import HelpCenter from "../views/HelpCenter.vue"
import Login from "../views/Login.vue"
import SearchInfo from "../views/SearchInfo.vue"

Vue.use(VueRouter);


export default function(){
  const router =  new VueRouter({
    mode:'history',
    routes: [
      {
        path: "/",
        redirect: "/home"
      },{
        path: "/home",
        name:"home",
        component:Home
      },{
        path: "/about",
        name:"about",
        component:About
      },{
        path: "/helpcenter",
        name:"helpcenter",
        component:HelpCenter
      },{
        path: "/login",
        name:"login",
        component:Login
      },{
        path: "/searchinfo/:msg",
        name:"searchinfo",
        component:SearchInfo
      }
    ]
  })
  return router
}