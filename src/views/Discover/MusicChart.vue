<template>
  <div class="music-chart">
    <div class="hd">
      <div class="more">
        <span>更多</span>
        <span class="iconfont icon-next-m"></span>
      </div>
      <h2 class="title">排行榜</h2>
    </div>
    <div class="wrap">
        <van-swipe :autoplay="3000">
            <van-swipe-item>
                <div class="list"></div>
            </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  name: "MusicChart",
};
</script>

<style lang="less" scoped>
.music-chart {
  font-size: 14px;
}
.hd {
  padding: 10px 0;
  color: #000;
  font-size: 12px;
  text-align: left;
  .more {
    float: right;
    span {
      font-size: 12px;
    }
  }
  .title {
    position: relative;
    font-size: 14px;
    padding-left: 10px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 3px;
      border-radius: 15px;
      background: #f8343b;
      overflow: hidden;
    }
  }
}
</style>