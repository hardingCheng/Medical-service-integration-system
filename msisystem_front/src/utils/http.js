// Asiox封装
import axios from "axios";
import qs from "querystring";
import router from "../router/index";
//在main.js已经被实例化了，句不需要了
// const router = VueRouter()

//跳转登录页面
const toLogin = () => {
  router.push({
    path: "/login"
  });
};

//处理错误信息
const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      console.log("信息校验失败！");
      break;
    case 401:
      //求登录
      toLogin();
      console.log("认证失败");
      break;
    case 406:
      //token 过时了   需要求出token
      console.log("token认证失败");
      break;
    case 403:
      console.log("客户端请求失败");
      break;
    default:
      console.log(other);
      break;
  }
};

//创建Axios创建实例
// 创建实例时设置配置的默认值
var instance = axios.create({
  timeout: 5000 //超时直接不请求
});

// 在实例已创建后修改默认值
//instance.defaults.baseURL = "http://127.0.0.1:8001";
//这里设置了，请求拦截就不需要了。
//instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN"; //token
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 添加请求拦截器
instance.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    // 判断post请求需要增加qs转化
    if (config.method === "post") {
      //处理传入post的请求的数据
      config.data = qs.stringify(config.data);
    }
    //上面有了  下面不需要了
    // if (token) {
    //   config.headers.Authorization = "AUTH_TOKEN";
    // }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  //转为es6的箭头函数
  res => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  error => {
    const { response } = error;
    if (response) {
      errorHandle(response.status, response.data.message);
      return Promise.reject(error);
    } else {
      console.log("断网了");
    }
  }
);
export default instance;
