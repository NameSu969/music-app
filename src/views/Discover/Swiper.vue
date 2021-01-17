<template>
    <div class="swiper-container">
        <van-swipe
            class="my-swipe swiper-wrap"
            :autoplay="3000"
            indicator-color="white"
        >
            <van-swipe-item
            class="swiper-slide"
            v-for="banner in banners"
            :key="banner.bannerId"
            >
            <img :src="banner.pic" alt="" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    name: 'Swiper',
    props: ['banners']
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  height: 1.3rem;
  border-radius: 0.15rem;
  background: #f8343b;
  overflow: hidden;
  .swiper-wrap {
    height: 100%;
    width: 100%;
  }
}
</style>