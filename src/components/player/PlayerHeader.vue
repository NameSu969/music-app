<template>
  <div class="player-header">
    <div class="back" @click="$router.back()">
      <span class="iconfont icon-down"></span>
    </div>
    <div class="title">
      <span class="name">认真的雪 - 未完成的歌</span>
      <div class="singer">
          <span>薛之谦</span>
        <span class="iconfont icon-next-m"></span>
      </div>
    </div>
    <div class="share" @click="$emit('update:showShare',true)">
      <span class="iconfont icon-fenxiang1"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerHeader",
  props: ['currentSong'],
};
</script>

<style lang="less" scoped>
.player-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  font-size: 12px;
  color: #fff;
  .back,
  .share {
    height: 40px;
    width: 40px;
    line-height: 40px;
    text-align: center;
    .iconfont {
      font-size: 18px;
    }
  }
  .title {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .name {
      display: block;
      width: 100%;
      padding: 0 50px;
      font-size: 14px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .singer {
      color: hsla(#fff, 0.55);
      .iconfont {
        font-size: 12px;
      }
    }
  }
}
</style>