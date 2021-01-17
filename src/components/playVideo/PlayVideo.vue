<template>
  <div class="playVideo" ref="playVideo">
    <div class="header" ref="header">
      <div class="back" @click="$router.back()">
        <span class="iconfont icon-back"></span>
      </div>
      <h2 class="title text-hide">{{ detail.name }}</h2>
    </div>
    <div class="video-wrap">
      <div class="wrap" ref="videoWrap">
        <video :src="video" class="video" ref="video" controls autoplay></video>
        <div class="fullScreen" @click="fullScreen">全屏</div>
      </div>
    </div>
    <div class="main">
      <van-tabs v-model="active" swipeable animated>
        <van-tab title="详情"> <VideoDetail :detail="detail" :showShare.sync="showShare"/></van-tab>
        <van-tab :title="`评论${commentTotal}`">
          <Comment :commentTotal="commentTotal" :comments="comments"/>
        </van-tab>
      </van-tabs>
    </div>
    <van-share-sheet
    v-model="showShare"
    title="立即分享给好友"
    :options="options"
    @select="select"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs,ShareSheet,Toast } from "vant";
import VideoDetail from "./VideoDetail";
import Comment from "../Comment";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(ShareSheet);

export default {
  name: "PlayVideo",
  data() {
    return {
      active: "详情",
      video: "",
      detail: "",
      comments: [],
      commentTotal: 0,
      showShare: false,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    };
  },
  components: {
    VideoDetail,
    Comment,
  },
  created() {
    let mvid = this.$route.query.mvid;
    this.getVideoUrl(mvid);
    this.getVideoDetail(mvid);
    this.getComment(mvid);
  },
  mounted() {
    const playVideo = this.$refs.playVideo;
    const header = this.$refs.header;
    const videoWrap = this.$refs.videoWrap;
    const video = this.$refs.video;

    // 导航滚动
    playVideo.addEventListener("scroll", () => {
      let ttop = playVideo.scrollTop || playVideo.scrollTop;
      if (ttop > 40) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
      if (ttop >= videoWrap.offsetHeight) {
        videoWrap.classList.add("small-video");
        video.removeAttribute('controls')
      } else {
        videoWrap.classList.remove("small-video");
        video.setAttribute('controls',true);
      }
    });
  },
  methods: {
    getVideoUrl(mvid) {
      //获取视频url
      this.$http("/mv/url?id=" + mvid).then((res) => {
        this.video = res.data.data.url;
      });
    },
    getVideoDetail(mvid) {
      //   获取视频数据
      this.$http("/mv/detail?mvid="+mvid).then((res) => {
        this.detail = res.data.data;
      });
    },
    getComment(mvid){
        // 获取评论
        this.$http('/comment/mv?id='+mvid).then(res =>{
            this.commentTotal = res.data.total;
            this.comments = res.data;
        })
    },
    fullScreen(){
        const video = this.$refs.video;
        if (video.webkitRequestFullScreen) {
            video.webkitRequestFullScreen(); //谷歌
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen(); //火狐
        } else if (video.oRequestFullScreen) {
            video.oRequestFullScreen(); //欧朋
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen(); //IE
        }
    },
    select(option){
        Toast(option.name + '分享成功');
        this.showShare = false;
    }
  },
  beforeRouteUpdate (to,from,next) {
    let mvid = to.query.mvid;
    this.getVideoUrl(mvid);
    this.getVideoDetail(mvid);
    this.getComment(mvid);
    next();
  },
};
</script>

<style lang="less" scoped>
.playVideo {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  font-size: 14px;
  background: #fff;
  overflow-y: scroll;
  z-index: 10;
  &::-webkit-scrollbar {
    display: none;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #fff;
  z-index: 10;
  h2 {
    margin: 0 50px;
    overflow: hidden;
  }
  .back {
    position: absolute;
    top: 5px;
    left: 5px;
    height: 30px;
    width: 30px;
    line-height: 30px;
    background: hsla(#000, 0.55);
    border-radius: 50%;
  }
  &.scroll {
    background: #fff;
    color: #000;
    .back {
      background: #fff;
    }
  }
}
.video-wrap {
  height: 2.11rem;
  background: #000;
  .wrap {
    height: 100%;
    width: 100%;
    &.small-video {
      position: fixed;
      right: 10px;
      top: 70%;
      width: 150px;
      height: 90px;
      background: #000;
      z-index: 10;
      .fullScreen {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #fff;
        z-index: 10;
        transform: translate(-50%, -50%);
      }
    }
  }
  .video {
    height: 100%;
    width: 100%;
  }
}
</style>