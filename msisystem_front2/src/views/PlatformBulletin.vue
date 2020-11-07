<template>
  <div class="platformbulletin">
    <TopNav />
    <div class="w platformbulletin-main">
      <h3 class="platformbulletin-main-title">平台公告</h3>
      <div class="bullein-main">
        <div class="bullein-main-title">
          <h1>陈吉宁：推动北京在科幻领域成为具有世界影响力的城市</h1>
        </div>
        <hr/>
        <div class="bullein-main-context">
        <p>
        11月2日，由陕西省靖边县检察院提起公诉的被告人马某宽涉嫌故意杀人罪一案，经靖边县法院公开开庭审理作出一审判决，被告人马某宽犯故意杀人罪，判处其有期徒刑十二年。
        </p>
        <p>
          11月3日，红星新闻记者从马某宽所在社区支部书记贾某获悉，马某宽的母亲王桂芳于今年农历8月初十（9月26日）因病去世。针对网络“马某宽母亲被埋导致身体变差”的说法，贾某称“并非如此，他母亲身体一直不好。”贾某还称，今年5月5日，王桂芳从墓坑中被救出后，一直由马某宽的妻子照顾，“照顾得非常好，村里也针对他家的情况进行了帮扶。”
        </p>
        
        <p>
另红星新闻记者从靖边县官方人士处获悉，马某宽被捕后，母亲王桂芳对其行为表示了谅解。法院开庭审理过程中，被告人自愿认罪认罚，认罪悔罪。宣判后，被告人马某宽当庭未表示上诉。
        </p>
        
        </p>
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
  top: -70px;
  color: black;
  font-size: 20px;
}
.bullein-main-context {
  margin-top: 50px;
}
.bullein-main {
  margin-top: 90px;
}
.bullein-main h1 {
  text-align: center;
  color: black;
  font-size: 20px;
  margin: 20px 0;
}
</style>
