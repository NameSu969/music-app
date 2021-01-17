<template>
  <div class="songlist">
      <div class="tip">
          <span class="iconfont icon-vip"></span>
          <h5 class="sf">含{{vipType}}首VIP专享歌曲</h5>
          <div class="openvip">
              <span class="txt">首开VIP5元</span>
              <span class="iconfont icon-next-m"></span>
          </div>
      </div>
      <div class="main">
          <div class="hd grad">
              <div class="play grad-40px">
                  <span class="iconfont icon-PlayCircle-1"></span>
              </div>
              <div class="txt grad-1">播放全部 <span>（{{songs.length}}）</span></div>
              <div class="download grad-40px">
                  <span class="iconfont icon-xiazai"></span>
              </div>
              <div class="all grad-40px">
                  <span class="iconfont icon-list"></span>
              </div>
          </div>
          <div class="list">
              <div class="item grad" v-for="(item,index) in songs" :key="item.id">
                  <div class="order grad-40px">{{index+1}}</div>
                  <div class="info grad-1">
                      <div class="name text-hide">{{item.name}}</div>
                      <div class="bottom text-hide">
                          <div class="sq"></div>
                          <div class="vip"></div>
                          <div class="dj"></div>
                          <div class="singer">{{item.ar | formatArtists}}</div>
                          <div class="album">- {{item.al.name}}</div>
                      </div>
                  </div>
                  <div class="mv grad-40px" >
                      <span class="iconfont icon-shipin" v-if="item.mv !== 0" @click="watchVideo(item.mv)"></span>
                  </div>
                  <div class="more grad-40px">
                      <span class="iconfont icon-more"></span>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SongList',
    props: ['songs','vipType'],
    methods: {
        watchVideo(mvid){
            this.$router.push({
                path: 'playVideo',
                query: {
                    mvid:mvid
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>
.songlist {
    position: relative;
    padding: 0 15px;
}
.tip {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid #b1b1b1;
    .iconfont {
        color: red;
    }
    .sf {
        flex: 1;
        font-size: 12px;
        margin: 0 10px;
    }
    .openvip {
        color: #b1b1b1;
        font-size: 12px;
        .iconfont {
            color: #b1b1b1;
            font-size: 14px;
        }
    }
}

.main {
    position: relative;
    .hd {
        position: sticky;
        top: 40px;
        padding: 10px 0;
        background: #fff;
    .play {
        color: red;
        .iconfont {
            font-size: 20px;
        }
    }
    .txt {
        span {
            color: #b1b1b1;
            font-size: 12px;
        }
    }
}
}
.list {
    .item {
        padding: 5px 0;
        color: #b1b1b1;
        .info {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            overflow: hidden;
            .name {
                font-size: 13px;
                width: 100%;
                color: #000;
            }
            .bottom {
                margin-top: 2px;
                font-size: 12px;
                display: flex;
            }
        }
    }
}
.grad {
    display: flex;
    align-items: center;
    .grad-40px {
    width: 40px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    .iconfont {
        font-size: 18px;
    }
    }
    .grad-1 {
        flex: 1;
    }
}
</style>