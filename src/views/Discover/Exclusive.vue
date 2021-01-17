<template>
  <!-- 独家推送 -->
  <div class="exclusive">
    <div class="exclusive-wrap">
      <div class="hd">
        <div class="more">
          <span>更多</span>
          <span class="iconfont icon-next-m"></span>
        </div>
        <h2 class="title">独家推送</h2>
      </div>
      <div class="list">
        <div class="item" v-for="item in mvlist" :key="item.id" @click="selectItem(item.id)">
          <div class="img-wrap">
            <img :src="item.picUrl" :alt="item.name" :title="item.name" />
            <span class="iconfont icon-play"></span>
          </div>
          <span class="name">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Exclusive",
  props: ["mvlist"],
  methods: {
    selectItem(mvid){
      this.$router.push({
        path: 'playVideo',
        query:{
          mvid
        }
      })
    }
  },
};
</script>

<style lang="less" scoped>
.hd {
  padding: 10px 0;
  color: #000;
  font-size: 12px;
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
.exclusive-wrap {
  .hd {
    padding: 10px 0;
    color: #000;
    font-size: 12px;
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
  .list {
    display: flex;
    position: relative;
    overflow-x: scroll;
    &::-webkit-scrollbar{
      display: none;
    }
    .item {
      margin-right: 10px;
      .img-wrap {
        position: relative;
        height: 0.8rem;
        width: 2.15rem;
        border-radius: 5px;
        background: #dfdfdf;
        overflow: hidden;
        .iconfont {
          position: absolute;
          top: 50%;
          left: 50%;
          font-size: 0.34rem;
          color: hsla(#fff, 0.75);
          transform: translate(-50%, -50%);
        }
      }
      .name {
        margin-top: 5px;
        line-height: 18px;
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>