<template>
  <div class="nav-bar">
    <router-link to="/discover" tag="div" class="tag">
      <span class="iconfont icon-gedan"></span>
      <p>精选</p>
    </router-link>
    <router-link to="rank" tag="div" class="tag">
      <span class="iconfont icon-icranking"></span>
      <p>榜单</p>
    </router-link>
    <div class="tag song">
      <div class="img-wrap">
        <img src="../assets/music.jpg" class="pause"/>
      </div>
    </div>
    <router-link to="/videos" tag="div" class="tag">
      <span class="iconfont icon-shipin"></span>
      <p>视频</p>
    </router-link>
    <router-link to="/center" tag="div" class="tag">
      <span class="iconfont icon-menuoff"></span>
      <p>我的</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="less" scoped>
.nav-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  max-width: 1024px;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  height: 50px;
  color: #2c3e50;
  background: #fff;
  z-index: 1;
  .tag {
    width: 20%;
    text-align: center;
    .iconfont {
      display: block;
      font-size: 20px;
    }
    p {
      margin-top: 3px;
      font-size: 12px;
    }
    &.router-link-exact-active {
      color: #fc4e46;
    }
  }
  .song {
    position: relative;
    .img-wrap {
      height: 50px;
      width: 50px;
      margin: 0 auto 15px;
      border-radius: 50%;
      border: 5px solid #fff;
      background: #fff;
      overflow: hidden;
      img {
        position: relative;
        z-index: 2;
        animation: playing 20s linear infinite;
        &.pause {
          animation-play-state: paused;
          -webkit-animation-play-state: paused; /* Safari 和 Chrome */
        }
      }
    }
    .circle {
      position: absolute;
      top: 2px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
    }
  }
}

@keyframes playing {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>