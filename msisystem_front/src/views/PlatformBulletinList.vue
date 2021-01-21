<template>
  <div class="platformbulletin">
    <TopNav />
    <div class="w platformbulletin-main">
      <h3 class="platformbulletin-main-title">平台公告</h3>
      <div class="platformbulletin-main-list">
        <div class="platformbulletin-main-list-item">
          <router-link class="item-send-link" to="platformbulletin/3/193">
            <span class="item-send-title"
              >北京市第一中西医结合医院东坝院区通知</span
            >
            <span class="item-send-time">2020年09月29日</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
  name: "PlatformBulletin",
  components: {
    TopNav,
  },
};
</script>
<style>
.platformbulletin-main {
  position: relative;
}
.platformbulletin-main-title {
  position: absolute;
  top: 15px;
  color: black;
  font-size: 20px;
}
.platformbulletin-main-list {
  position: absolute;
  top: 100px;
}
.platformbulletin-main-list-item {
  height: 45px;
  width: 1000px;
}
.platformbulletin-main-list-item a {
  color: black;
}
.platformbulletin-main-list-item a:hover {
  color: #4490f1;
}
.platformbulletin-main-list-item .item-send-title {
  float: left;
}
.platformbulletin-main-list-item .item-send-time {
  float: right;
}
</style>
