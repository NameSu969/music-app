<template>
  <div class="player-chart">
    <div class="img-wrap">
      <img src="@/assets/109951163905989777.jpg"/>
    </div>
    <div class="function">
      <span class="iconfont icon-like"></span>
      <a href="#" download="musicUrl" class="iconfont icon-xiazai"></a>
      <span class="iconfont icon-pinglun"></span>
      <span class="iconfont icon-more"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerChart",
  props: ['musicUrl','currentSong','playing'],
};
</script>

<style lang="less">
.player-chart {
    font-size: 18px;
  .img-wrap {
    width: 274px;
    height: 274px;
    border-radius: 50%;
    margin: 100px auto 0;
    border: 44px solid #000;
    box-shadow: 0 0 20px hsla(#fff, 0.15);
    background: #dfdfdf;
    img {
      border-radius: 50%;
      animation: turn 40s linear infinite;
    &.pause {
      animation-play-state: paused;
      -webkit-animation-play-state: paused; /* Safari 和 Chrome */
    }
    }
  }
  .function {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 0 10px;
    text-align: center;
    color: hsla(#fff, 0.85);
    .iconfont {
      font-size: 18px;
      margin: 0 30px;
      color: hsla(#fff, 0.85);
    }
  }
}
@keyframes turn {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>