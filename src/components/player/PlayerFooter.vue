<template>
  <div class="player-footer">
    <div class="progress">
      <span class="current-time">00:00</span>
      <div class="progress-bar">
        <!-- <div class="bar"></div> -->
        <van-slider
          v-model="value"
          step="1"
          :max="duration || 100"
          button-size="8"
          bar-height="3"
          active-color="red"
          inactive-color="hsla(#fff, 0.55)"
        />
      </div>
      <span class="duration">04:12</span>
    </div>
    <div class="controls">
      <span class="iconfont icon-suiji"></span>
      <span class="iconfont icon-24gf-previous"></span>
      <span class="iconfont icon-play"></span>
      <!-- <span class="iconfont icon-play" v-else></span> -->
      <span class="iconfont icon-next"></span>
      <span class="iconfont icon-list"></span>
    </div>
    <div class="msg">播放状态</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Slider } from "vant";

Vue.use(Slider);
export default {
  name: "PlayerFooter",
  props: ["playing", "duration", "currentTime"],
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style lang="less" scoped>
.player-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  width: 100%;
  font-size: 12px;
  color: #fff;
  padding: 5px 20px 0;
  .progress {
    display: flex;
    align-items: center;
    color: hsla(#fff, 0.75);
    .progress-bar {
      flex: 1;
      position: relative;
      margin: 0 10px;
      height: 3px;
      background: hsla(#fff, 0.25);
    }
  }
  .controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 66px;
    padding: 0 0.2rem;
    span {
      font-size: 24px;
    }
    .icon-play,
    .icon-pause {
      font-size: 60px;
    }
  }
}
.msg {
  position: fixed;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%);
  background: hsla(#000, 0.35);
  padding: 5px 10px;
  border-radius: 15px;
}
</style>