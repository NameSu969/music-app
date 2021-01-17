<template>
  <div class="header">
      <div class="menu" @click="showPopup">
        <span class="iconfont icon-menuoff"></span>
      </div>
      <div class="search-wrap" @click="$router.push('/search')">
        <span class="iconfont icon-search"></span>
        <span class="txt">认真的雪-薛之谦</span>
      </div>
      <div class="sign" @click="show=true">
        <span class="iconfont icon-qiandao"></span>
      </div>
      <van-dialog v-model="show"  message='签到成功，积分+999' theme='round-button' :closeOnClickOverlay="true" confirm-button-color="#f8343b" >
      </van-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
import { Dialog } from 'vant';
Vue.use(Dialog)
export default {
    name: 'Header',
    data() {
      return {
        show:false
      }
    },
    methods: {
        // 弹出侧边层
        showPopup() {
          this.$emit('update:show',true)
        },
    },
}
</script>

<style lang="less" scoped>
.header {
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    max-width: 1024px;
    min-width: 320px;
    width: 100%;
    margin: 0 auto;
    height: 40px;
    background: #fff;
    z-index: 10;
    font-size: 14px;
  .menu,
  .sign {
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #000;
    text-align: center;
    .iconfont {
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
  }
  .search-wrap {
    flex: 1;
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    margin: 0 10px;
    color: #9a9a9a;
    font-size: 12px;
    background: hsla(#b1b1b1, 0.15);
    border-radius: 15px;
    overflow: hidden;
    .icon-search {
      font-size: 14px;
    }
  }
}
</style>