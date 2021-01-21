<template>
  <div class="top-nav">
    <div class="w">
      <div class="top-nav-logo">
        <router-link to="/">
          <div class="top-nav-left">
            <img src="../static/cnulog.png" alt="" />
            <p class="top-nav-title">医疗服务信息平台</p>
          </div>
        </router-link>
        <div class="top-nav-right">
          <router-link to="helpcenter">帮助中心</router-link>
          <router-link to="login">登录与注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-nav {
  height: 70px;
  widows: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
}
top-nav-left {
  float: left;
}
.top-nav-logo {
  position: relative;
  height: 70px;
}
.top-nav-logo img {
  width: 60px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -35px; /* 高度的一半 */
}
.top-nav-logo .top-nav-title {
  display: inline-block;
  position: absolute;
  left: 70px;
  top: 18px;
  font-size: 25px;
  color: rgba(5, 33, 92);
}
.top-nav-right {
  position: absolute;
  right: 0;
  top: 31%;
  text-align: center;
}
.top-nav-right a {
  margin-left: 20px;
  font-size: 15px;
  color: #999;
}
.top-nav-right a:nth-child(2) {
  color: black;
}
.top-nav-right a:hover {
  color: #99ccff;
}
</style>
