<template>
  <div class="search">
    <div class="w">
      <div class="header-input">
        <input
          v-model="info"
          class="header-input-style"
          type="text"
          placeholder="请输入搜索医院名称"
        />
        <span class="header-input-left" @click="searchinfo"> 搜索</span>
        <span class="header-input-right"
          ><Icon type="ios-search" size="20"
        /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      info: "",
    };
  },
  components: {},
  methods: {
    searchinfo() {
      this.$router.push({ name: "searchinfo", params: { msg: this.info } });
    },
  },
};
</script>
<style scoped>
.search {
  margin-top: 10px;
}
.header-input {
  margin: 0 auto;
  width: 650px;
  position: relative;
}
.header-input-style {
  display: inline-block;
  width: 600px;
  height: 40px;
  padding-left: 30px;
  font-size: 16px;
  color: #333;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #eee;
  outline: none;
  transition: border-bottom 2s;
}
.header-input-style:focus {
  border-bottom: 1px solid blue;
}
.header-input-left {
  position: absolute;
  right: 50px;
  top: 10px;
  z-index: 1;
  font-size: 16px;
  color: #4490f1;
  cursor: pointer;
}
.header-input-right {
  position: absolute;
  left: 8px;
  top: 10px;
}
</style>