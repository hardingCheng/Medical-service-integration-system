<template>
  <div class="platformbulletin">
    <TopNav />
    <div class="w platformbulletin-main">
      <h3 class="platformbulletin-main-title">平台公告</h3>
      <div class="bullein-main">
        <div class="bullein-main-title">
          <h1>北京市第一中西医结合医院东坝院区通知</h1>
        </div>
        <hr />
        <div class="bullein-main-context">
          <p>
            因医院系统升级改造，北京市第一中西医结合医院东坝院区11月1日以后的号源暂时停挂，并停止更新号源。预计于十月底恢复正常，给您带来的不便敬请谅解。
          </p>
        </div>
        <div class="right-bottom-context">
          <p>医疗服务集成系统</p>
          <p>2020-11-06</p>
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
<style scoped>
.platformbulletin-main {
  position: relative;
}
.platformbulletin-main-title {
  position: absolute;
  top: -70px;
  color: black;
  font-size: 20px;
}
.bullein-main {
  margin-top: 90px;
  position: relative;
}
.bullein-main-context {
  margin-top: 50px;
}
.bullein-main h1 {
  text-align: center;
  color: black;
  font-size: 20px;
  margin: 20px 0;
}
.right-bottom-context {
  position: absolute;
  right: 0;
  margin-top: 80px;
  text-align: center;
  font-size: 10px;
}
</style>
