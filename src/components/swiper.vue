<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../../static/images/banner.jpg"></div>
        <div class="swiper-slide"><img src="../../static/images/banner.jpg"></div>
        <div class="swiper-slide"><img src="../../static/images/banner.jpg"></div>
        <div class="swiper-slide"><img src="../../static/images/banner.jpg"></div>
        <div class="swiper-slide"><img src="../../static/images/banner.jpg"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Swiper",
  components: {},
  data() {
    return {};
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autopaly:{
          stopOnLastSlide:true,
          delay:3000,
          disableOnInteraction:true
      },
      observer:true,
      observeParents:true,
    });
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>