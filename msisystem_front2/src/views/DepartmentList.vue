<template>
  <div class="departmentlist">
    <TopNav/>
    <div class="w">
        <div class="departmentlist-main">
          <div class="departmentlist-main-title">
            <h2>核酸检测</h2>
          </div>
          <div class="departmentlist-main-left">
            <ul class="departmentlist-main-list">
              <li>核酸检测</li>
              <li>全科医疗科</li>
              <li>内科</li>
              <li>外科</li>
              <li>重症医学科</li>
              <li>急症介入科</li>
              <li>肿瘤科</li>
              <li>妇产科</li>
              <li>儿科</li>
            </ul>
          </div>
          <div class="departmentlist-main-right">
            我是右边部分
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav"
export default {
  name: "DepartmentList",
  components: {
    TopNav
  }
};
</script>
<style scoped>
.departmentlist-main {
  position: relative;
  margin-top: 30px;
}
.departmentlist-main-title {
  margin-bottom: 30px;
}
.departmentlist-main-left {
  float: left;
  width: 180px;
  height: 100%;
  background-color: blanchedalmond;
}
.departmentlist-main-right {
  float: right;
  width: 750px;
  height: 100%;
  background-color: blanchedalmond;
}
</style>