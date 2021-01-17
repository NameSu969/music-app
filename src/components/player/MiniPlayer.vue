<template>
  <div class="mini-player">
      <div class="img-wrap">
        <img src="@/assets/music.jpg"/>
      </div>
      <div class="info">
        <span class="name">认真的雪</span>
        <span class="singer"> - 薛之谦</span>
      </div>
      <div class="playbtn">
        <!-- <span class="iconfont"></span> -->
        <span class="iconfont icon-pause"></span>
      </div>
      <div class="play-list">
        <span class="iconfont icon-gedan"></span>
      </div>
    </div>
</template>

<script>
export default {
    name: 'MiniPlayer'
}
</script>

<style lang="less" scoped>
.mini-player {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    max-width: 1024px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    font-size: 14px;
    color: #000;
    background: #fff;
    display: flex;
    align-items: center;
    box-shadow: 1px 0 1px hsla(#000, 0.15);
    z-index: 1;
  .img-wrap {
    height: 40px;
    width: 40px;
    margin-top: -9px;
    background: #dfdfdf;
    overflow: hidden;
    border-radius: 50%;
    border: 5px solid #000;
    img {
    animation: turn 20s linear infinite;
      &.pause {
      animation-play-state: paused;
      -webkit-animation-play-state: paused; /* Safari 和 Chrome */
    }
    }
  }
  .info {
    flex: 1;
    height: 50px;
    line-height: 50px;
    padding: 0 50px 0 15px;
    .singer {
      color: #b1b1b1;
      font-size: 12px;
    }
  }
  .playbtn,
  .play-list {
      color: #2c3e50;
    position: relative;
    margin-left: 10px;
    .iconfont {
      font-size: 30px;
    }
  }
  .play-list {
    .iconfont {
      font-size: 26px;
    }
  }
}
</style>