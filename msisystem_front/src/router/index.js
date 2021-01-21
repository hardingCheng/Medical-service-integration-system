import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import HelpCenter from "../views/HelpCenter.vue";
import Login from "../views/Login.vue";
import SearchInfo from "../views/SearchInfo.vue";
import PlatformBulletin from "../views/PlatformBulletin.vue";
import NucleicAcid from "../views/NucleicAcid.vue";
import DepartmentList from "../views/DepartmentList.vue";
import PlatformBulletinList from "../views/PlatformBulletinList.vue";
import HospitalInfo from "../views/HospitalInfo.vue";
import HospitalProfile from "../views/HInfo/HospitalProfile.vue";
import HospitalDepartmentInformation from "../views/HInfo/HospitalDepartmentInformation.vue";
Vue.use(VueRouter);

export default function() {
  const router = new VueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        redirect: "/home"
      },
      {
        path: "/home",
        name: "home",
        component: Home
      },
      {
        path: "/about",
        name: "about",
        component: About
      },
      {
        path: "/helpcenter",
        name: "helpcenter",
        component: HelpCenter
      },
      {
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/searchinfo/:msg",
        name: "searchinfo",
        component: SearchInfo
      },
      {
        path: "/platformbulletin/:type/:id",
        name: "platformbulletin",
        component: PlatformBulletin
      },
      {
        path: "/nucleicacid",
        name: "nucleicacid",
        component: NucleicAcid
      },
      {
        path: "/departmentlist",
        name: "departmentlist",
        component: DepartmentList
      },
      {
        path: "/platformbulletinlist",
        name: "platformbulletinlist",
        component: PlatformBulletinList
      },
      {
        path: "/hospitalinfo/:hid",
        name: "hospitalinfo",
        component: HospitalInfo,
        children: [
          {
            path: "hospitalprofile",
            name: "hospitalprofile",
            component: HospitalProfile
          },
          {
            path: "hdepinformation",
            name: "hdepinformation",
            component: HospitalDepartmentInformation
          }
        ]
      }
    ]
  });
  return router;
}
