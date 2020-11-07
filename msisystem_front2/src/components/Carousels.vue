<template>
  <div>
    <div class="w swiper-main">
      <Carousel v-model="value1" autoplay loop>
        <CarouselItem v-for="(item,index) in swiperImages" :key="index">
            <div class="demo-carousel">
              <img class="swiper-img" :src="item" alt="">
            </div>
        </CarouselItem>
    </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousels",
  data() {
    return {
      value1:0,
      swiperImages: [
        require("../static/20200910112405.jpg"),
        require("../static/banner4.jpg"),
      ]
    };
  },
  mounted() {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-main {
  margin-top: 5px;
}
.swiper-img {
  width: 100%;
  height: 350px;
}
</style>
