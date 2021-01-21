<template>
  <div class="nucleic-acid">
    <TopNav />
    <div class="w">
      <div class="na-main">
        <div class="na-line">
          <img src="../static/nucleicacid.png" alt="" />
        </div>
        <div class="warning-prompt">
          <Alert type="warning" show-icon
            >有核酸检测需求的用户，请在以下医院及科室进行预约</Alert
          >
        </div>
        <div class="na-select">
          <QuickLinksSelect />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import QuickLinksSelect from "../components/QuickLinksSelect";
export default {
  name: "NucleicAcid",
  components: {
    TopNav,
    QuickLinksSelect,
  },
};
</script>
<style>
.na-main {
  position: relative;
  margin-top: 5px;
}
.na-line {
  background-color: #f7fbff;
  height: 300px;
  width: 100%;
}
.na-line img {
  position: absolute;
  top: 40px;
  left: 140px;
  height: 200px;
}
.warning-prompt {
  width: 450px;
  margin: 20px auto;
}
</style>

