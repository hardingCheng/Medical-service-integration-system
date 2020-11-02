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
        require("../static/5f9a75b60001c5a318720764.jpg"),
        require("../static/5f9a77000001d52818720764.jpg"),
        require("../static/5f9aa4610001352a18720764.jpg"),
        require("../static/5f9aa4ef0001866718720764.jpg"),
        require("../static/5f9aa51e0001983718720764.jpg")
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
