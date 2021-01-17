<template>
  <div class="playlist" ref="playlist">
    <div class="header">
      <div class="back" @click="$router.back()">
        <span class="iconfont icon-back"></span>
      <div class="bg" ref="headerBg" v-if="songDetail.creator" :style="`background-image: url(${songDetail.coverImgUrl})`"></div>
      </div>
      <div class="title">歌单</div>
      <div class="search">
        <span class="iconfont icon-search"></span>
      </div>
    </div>
    <SongDetail :detail="songDetail" :showIntroduce.sync="showIntroduce"/>
    <SongList :songs="songs" :vipType="vipType"/>
    <transition name='fade-in'>
      <SongIntroduce :detail="songDetail" v-if="showIntroduce" :showIntroduce.sync="showIntroduce"/>
    </transition>
    <MiniPlayer/>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
import SongDetail from "./SongDetail";
import SongList from "./SongList";
import SongIntroduce from "./SongIntroduce";
import MiniPlayer from "./player/MiniPlayer";

Vue.use(NavBar);
Vue.use(Icon);
export default {
  name: "Playlist",
  components: {
    SongDetail,
    SongList,
    SongIntroduce,
    MiniPlayer,
  },
  data() {
    return {
      songDetail: [],
      songs: [],
      showIntroduce: false,  //歌单介绍状态
      vipType: 0,
    };
  },
  created() {
    let id = this.$route.query.id;
    // 获取歌单信息
    this.$http("/playlist/detail?id=" + id).then((res) => {
      this.songDetail = res.data.playlist;
      this.vipType = res.data.playlist.creator.vipType;
      let ids = res.data.playlist.trackIds.map((item) => item.id);
      // 获取歌单列表
      this.$http("song/detail?ids=" + ids.join(",")).then((res) => {
        this.songs = res.data.songs;
      });
    });
  },
  mounted() {
    let playlist = this.$refs.playlist
    let t = 40;

    // let headerBg = this.$refs.headerBg
    
    playlist.onscroll = function(){
      // console.log(headerBg);
      // headerBg.style['filter'] = `blur(${t}px)`
      console.log(t - this.scrollTop);
    }
  },
};
</script>

<style lang="less" scoped>
.playlist {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  font-size: 14px;
  padding-bottom: 60px;
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
  height: 40px;
  width: 100%;
  align-items: center;
  text-align: center;
  color: #fff;
  display: flex;
  z-index: 10;
  overflow: hidden;
  .back,
  .search {
    height: 40px;
    width: 40px;
    line-height: 40px;
  }
  .title {
    flex: 1;
  }
.bg {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-color: #dfdfdf;
  filter: blur(20px);
  transform: scale(1.5);
}
}

.fade-in-enter-active,.fade-in-leave-active{
  transition: opacity .3s;
}
.fade-in-enter,.fade-in-leave-to {
  opacity: 0
}
</style>