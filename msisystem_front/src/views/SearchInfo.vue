<template>
  <div class="searchinfo">
    <TopNav/>
    <div class="w">
        我是主页搜索信息：
        <p>{{this.$route.params.msg}}</p>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav"
export default {
  name: "SearchInfo",
  components: {
    TopNav
  }
};
</script>
