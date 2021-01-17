<template>
  <div class="player-lyric">
    <div class="volume">
      <span class="iconfont" :class="value == 0 ? 'icon-caozuo-jingyin' : 'icon-shengyin' "></span>
      <!-- <span class="iconfont"></span> -->
      <div class="progress">
        <van-slider v-model="value" step="0.01" max="1" button-size="8" bar-height="3" active-color="red" inactive-color="hsla(#fff, 0.55)"/>
      </div>
    </div>
    <div class="lyric-info" ref="lyricWrap" >
      <div class="lyric-wrap" ref="lyric">
        <p class="lyric-item">
          暂无歌词
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'PlayerLyric',
    props: ['currentTime'],
    data() {
        return {
            value: 0.5,
        }
    },
}
</script>

<style lang="less">
.player-lyric {
    height: 100%;
    font-size: 14px;
  .volume {
    display: flex;
    margin: 10px 40px;
    align-items: center;
    color: #fff;
    .progress {
      position: relative;
      flex: 1;
      margin: 0 10px;
      border-radius: 20px;
      background: hsla(#fff, 0.55);
    }
  }
  .lyric-info {
    position: relative;
    height: 85%;
    margin-top: 25px;
    padding: 0 35px;
    font-size: 12px;
    text-align: center;
    color: hsla(#fff, 0.85);
    overflow: hidden;
    .lyric-wrap {
      position: absolute;
      top: 160px;
      left: 0;
      width: 100%;
      text-align: center;
      transition: all .5s linear;
    }
    .lyric-item {
      min-height: 30px;
      line-height: 30px;
      &.curr {
        color: red;
      }
    }
  }
}
</style>