<template>
  <!-- 搜索热搜榜 -->
  <div class="hotbot">
      <div class="hd">
          <h2 class="title">热搜榜</h2>
          <div class="play">
              <span class="iconfont icon-play1"></span>
              <span>播放</span>
          </div>
      </div>
      <div class="list" :style="h">
          <div class="item" :class="{hot: index < 3}" v-for="(item,index) in hotKeyword" :key="index">
              <div class="order">{{index+1}}</div>
              <div class="name">{{item.searchWord}}</div>
                <img :src="item.iconUrl" class="hotIco" v-if="item.iconType == 1">
                <img :src="item.iconUrl" class="up" v-if="item.iconType == 5">
          </div>
      </div>
      <div class="more" @click="unfoldHotBot = true" v-if="!unfoldHotBot">
          展开更多热搜
          <span class="iconfont icon-down"></span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'HotBot',
    data() {
        return {
            hotKeyword: [],
            unfoldHotBot: false, //展开更多热搜
        }
    },
    created() {
        this.$http('/search/hot/detail').then(res=>{
            this.hotKeyword = res.data.data;
        })
    },
    computed: {
        h(){
            return this.unfoldHotBot ? 'height: 400px' : ''
        }
    }
}
</script>

<style lang="less" scoped>
.hotbot {
    margin-top: 20px;
    font-size: 12px;
}
.hd {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #b1b1b1;
    .title {
        flex: 1;
        font-size: 13px;
    }
    .play {
        padding: 3px 10px;
        border: 1px solid #b1b1b1;
        border-radius: 15px;
        font-size: 12px;
        .iconfont {
            font-size: 14px;
        }
    }
}
.list {
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    transition: height .3s linear;
    .item {
        width: 50%;
        display: flex;
        align-items: center;
        height: 40px;
        &.hot {
            .order {
                color: red;
            }
            .name {
                color: #000;
                font-weight: bold;
            }
        }
        .order {
            width: 30px;
            color: #b1b1b1;
        }
        .name {
            color: #b1b1b1;
        }
        .hotIco {
            height: auto;
            width: 30px;
            margin-left: 5px;
        }
        .up {
            height: auto;
            width: 12px;
            margin-left: 5px;
        }
    }
}
.more {
    padding-top: 20px;
    text-align: center;
    font-size: 12px;
    color: #b1b1b1;
    .iconfont {
        font-size: 12px;
    }
}
</style>