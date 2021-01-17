<template>
  <!-- 推荐mv -->
  <div class="recommend-video">
    <div class="title">
      <span class="line"></span>
      <h3>你的专属mv推荐</h3>
      <span class="line"></span>
    </div>
    <div class="items">
      <div
        class="item"
        v-for="mv in mvlist"
        :key="mv.id"
        @click="selectItem(mv.id)"
      >
        <div class="img-wrap">
          <img :src="mv.picUrl" :alt="mv.artistName" />
          <div class="mv-name text-hide">{{ mv.name }}</div>
          <span class="iconfont icon-play"></span>
        </div>
        <div class="info">
          <span class="name">{{ mv.name }}</span>
          <span class="singer">{{ mv.artistName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendVideo",
  props: ["mvlist"],
  methods: {
    selectItem(mvid){
      this.$router.push({
        path: 'playVideo',
        query: {
          mvid
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.recommend-video {
  margin-top: 20px;
  .title {
    display: flex;
    align-items: center;
    font-size: 14px;
    .line {
      flex: 1;
      height: 1px;
      background: #dfdfdf;
    }
    h3 {
      color: #000;
      margin: 0 0.1rem;
      font-size: 14px;
    }
  }
  .items {
    .item {
      .img-wrap {
        position: relative;
        height: 1.9rem;
        margin-top: 0.2rem;
        background: #dfdfdf;
        border-radius: 0.05rem;
        overflow: hidden;
        .mv-name {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 0.28rem;
          line-height: 0.28rem;
          padding: 0 0.1rem;
          color: #fff;
          font-size: 0.12rem;
          background: hsla(#000, 0.55);
        }
        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 0.5rem;
          color: hsla(#fff, 0.75);
        }
      }
      .info {
        padding: 0.1rem 0;
        font-size: 0.12rem;
        color: #000;
        .singer {
          font-size: 0.12rem;
          zoom: 0.9;
          color: #b1b1b1;
          padding-left: 0.05rem;
        }
      }
    }
  }
}
</style>