<template>
  <div class="suggest">
      <div class="list">
          <div class="item so">搜索 "薛之谦"</div>
          <div class="item">
              <span class="iconfont icon-search"></span>
              <span class="name">薛之谦</span>
          </div>
          <div class="item">
              <span class="iconfont icon-search"></span>
              <span class="name">薛之谦</span>
          </div>
          <div class="item">
              <span class="iconfont icon-search"></span>
              <span class="name">薛之谦</span>
          </div>
          <div class="item">
              <span class="iconfont icon-search"></span>
              <span class="name">薛之谦</span>
          </div>
          <div class="item">
              <span class="iconfont icon-search"></span>
              <span class="name">薛之谦</span>
          </div>
          <div class="item">
              <span class="iconfont icon-search"></span>
              <span class="name">薛之谦</span>
          </div>
          <div class="item">
              <span class="iconfont icon-search"></span>
              <span class="name">薛之谦</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Suggest'
}
</script>

<style lang="less" scoped>
.suggest {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 15px;
    background: #fff;
    z-index: 99;
}

.list {
    box-shadow: 1px 1px 5px hsla(#ec4141,.15),-1px -1px 1px hsla(#f8343b ,.15);
    .item {
        &.so {
            border-top: 0;
            color: #1155cc;
        }
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        font-size: 12px;
        color: #b1b1b1;
        border-top: 1px solid #dfdfdf;
        overflow: hidden;
        .iconfont {
            font-size: 14px;
        }
        .name {
            margin-left: 5px;
        }
    }
}
</style>