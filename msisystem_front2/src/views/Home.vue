<template>
  <div class="home">
    <Header/>
    <div class="w">
      <div class="home-main">
        <div class="home-main-left">
          <HospitalSelection/>
        </div>
        <div class="home-main-right">
          <QuickLinks/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import HospitalSelection from '../components/HospitalSelection'
import QuickLinks from '../components/QuickLinks'
export default {
  name: "Home",
  components: {
    Header,
    HospitalSelection,
    QuickLinks
  },
  mounted(){
    this.$api.getTodayRcommend().then(res => {
      console.log(res)
    })
  }
};
</script>
<style>
.home-main {
  margin-top: 30px;
}
.home-main-left {
  float: left;
  height: 500px;
  width: 750px;
}
.home-main-right {
  float: right;
  height: 500px;
  width: 240px;
}
</style>
