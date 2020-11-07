<template>
  <div class="login">
    <div class="w">
        <div class="hinfo-main">
            <div class="main-hearder">
                <h2>北京协和医院</h2>
                <span>三级甲等</span>
            </div>
            <div class="main-middle">
                <div class="main-middle-img">
                    <img src="https://img.114yygh.com/image/image-003/23176337663806575.png" alt="">
                </div>
                <div class="main-middle-context">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {

  }
};
</script>
<style scoped>
.main-hearder {
    overflow: hidden;
}
.main-hearder h2,span{
    float: left;
}
.main-hearder span{
    margin-top: 6px;
    margin-left: 30px;
    font-size: 16px;
}
.main-middle {
    overflow: hidden;
}
.main-middle-img {
    float: left;
    width: 100px;
    margin-top: 18px;
}
.main-middle-img img{
    width: 90px;
    height: 90px;
}
.main-middle-context {
    float: left;
    width: 755px;
    margin-left: 10px;
}
.hp-main-slot {
    margin-top: 30px;
}
.hp-main-hdinfo {
    width: 700px;
    overflow: hidden;
}
.hp-main-slot-top {
    height: 60px;
    margin-top: 20px;
}
.hp-main-slot-bottom {
    height: 100%;
    margin-top: 20px;
}
.registration-rules span{
    margin-right: 60px;
}
</style>