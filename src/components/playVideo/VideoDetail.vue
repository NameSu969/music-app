<template>
  <div class="video-detail">
      <div class="header">
          <div class="personal">
              <div class="avatar">
                  <img :src="detail.cover" alt="">
              </div>
              <div class="name">
                  <span class="text-hide">{{detail.name}}</span>
                  <span class="fs">{{detail.subCount}}关注</span>
              </div>
              <div class="gz">+关注</div>
          </div>
          <div class="desc-wrap">
              <div class="left">
                  <div class="desc" :class="!isUnfold ? 'text-hide' : ''">{{detail.desc}}</div>
                  <span class="playCount">{{detail.playCount | formatPlayCount}}次播放</span>
                  <span class="date">{{detail.publishTime}}</span>
              </div>
              <div class="right">
                  <span class="iconfont" v-if="detail.desc" :class="!isUnfold ? 'icon-down' : 'icon-up'" @click="isUnfold = !isUnfold"></span>
              </div>
          </div>
          <div class="function">
              <div class="ico">
                  <div class="iconfont icon-like1"></div>
                  <span>76</span>
              </div>
              <div class="ico">
                  <div class="iconfont icon-xiazai1"></div>
                  <span>下载</span>
              </div>
              <div class="ico">
                  <div class="iconfont icon-like1"></div>
                  <span>收藏</span>
              </div>
              <div class="ico" @click="$emit('update:showShare',true)">
                  <div class="iconfont icon-fenxiang1"></div>
                  <span>分享</span>
              </div>
          </div>
      </div>
      <!-- 相关视频 -->
      <div class="correlation">
          <div class="title">
              <h2>相关视频</h2>
              <div class="tag">张韶涵</div>
              <div class="tag">音乐现场</div>
          </div>
          <ul class="list">
              <li class="item" v-for="item in mvs" :key="item.id" @click="selectItem(item.id)">
                  <div class="img-wrap">
                      <img :src="item.cover" alt="">
                      <div class="duration">{{item.duration/1000 | formatTime}}</div>
                  </div>
                  <div class="right">
                      <div class="name text-hide-2">{{item.name}}</div>
                      <div class="singer">{{item.artistName}}</div>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: 'VideoDetail',
    props: ['detail'],
    data() {
        return {
            mvs: [],
            isUnfold: false
        }
    },
    created() {
        const mvid = this.$route.query.mvid;
        //获取相关视频
        this.$http('/simi/mv?mvid='+mvid).then(res =>{
            this.mvs = res.data.mvs;
        })
    },
    methods: {
        selectItem(mvid){
            this.$router.push({
                path: '/playVideo',
                query:{
                    mvid
                }
            })
        }
    },
}
</script>

<style lang="less" scoped>
.video-detail {
    padding: 0 15px;
}
.header {
    padding: 10px 0;
    .personal {
        display: flex;
        align-items: center;
        .avatar {
            height: 40px;
            width: 40px;
            background: #dfdfdf;
            border-radius: 50%;
            overflow: hidden;
        }
        .name {
            flex: 1;
            margin: 0 10px;
            font-size: 14px;
            overflow: hidden;
            span {
                display: block;
            }
            .fs {
                font-size: 12px;
                color: #b1b1b1;
            }
        }
        .gz {
            padding: 3px 10px;
            font-size: 14px;
            color: #fff;
            background: #f8343b;
            border-radius: 15px;
        }
    }
    .desc-wrap {
        padding: 10px 0;
        display: flex;
        .left {
            flex: 1;
            margin-right: 20px;
            line-height: 20px;
            overflow: hidden;
            .playCount,.date {
                display: inline-block;
                margin-top: 10px;
                margin-right: 20px;
                font-size: 12px;
                color: #b1b1b1;
            }
        }
    }
    .function {
        display: flex;
        justify-content: center;
        align-items: center;
        .ico {
            width: 25%;
            font-size: 12px;
            text-align: center;
            .iconfont {
                font-size: 18px;
                margin-bottom: 5px;
            }
        }
    }
}
.correlation {
    padding: 10px 0;
    border-top: 1px solid #b1b1b1;
    .title {
        font-size: 14px;
        display: flex;
        align-items: center;
        .tag {
            margin-left: 15px;
            padding: 5px 15px;
            background: #dfdfdf;
            border-radius: 15px;
            font-size: 12px;
        }
    }
    .list {
        padding: 10px 0;
        .item {
            display: flex;
            justify-items: center;
            align-items: center;
            margin-top: 10px;
            .img-wrap {
                position: relative;
                height: 70px;
                width: 120px;
                background: #dfdfdf;
                border-radius: 5px;
                overflow: hidden;
                .duration {
                    position: absolute;
                    bottom: 5px;
                    right: 5px;
                    font-size: 12px;
                    color: #fff;
                }
            }
            .right {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                align-content: space-between;
                margin-left: 10px;
                .name {
                    width: 100%;
                }
                .singer {
                    margin-top: 5px;
                    font-size: 12px;
                    color: #b1b1b1;
                }
            }
        }
    }
}
</style>