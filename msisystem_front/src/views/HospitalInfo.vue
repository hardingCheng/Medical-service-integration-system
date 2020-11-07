<template>
  <div class="login">
    <TopNav/>
    <div class="w">
        <div class="hospitalinfo-main">
          <div class="hospitalinfo-main-left">
            <ul class="main-list">
              <router-link to="/hospitalinfo/213/hospitalprofile"><li>医院信息</li></router-link>
              <router-link to="/hospitalinfo/213/hdepinformation"><li>科室信息</li></router-link>
              <li>预约须知</li>
              <li>停诊信息</li>
              <li>其他信息</li>
            </ul>
          </div>
           <div class="hospitalinfo-main-right">
            <router-view/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav"
export default {
  name: "HospitalInfo",
  components: {
    TopNav
  },
  mounted(){
    this.defaultGo()
  },
  methods:{
    defaultGo(){
      this.$router.push('/hospitalinfo/213/hospitalprofile')
    }
  }
};
</script>
<style scoped>
.hospitalinfo-main {
  margin-top: 30px;
}
.hospitalinfo-main-left {
  float: left;
  width: 200px;
}
.hospitalinfo-main-right {
  float: right;
  width: 800px;
}
.main-list li{
  margin-bottom: 20px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding-left: 30px;
}
</style>