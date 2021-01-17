<template>
  <!-- 歌单广场 -->
  <div class="song-catlist">
    <div class="header">
      <div class="back" @click="$router.back()">
        <span class="iconfont icon-back"></span>
      </div>
      <div class="title">歌单</div>
      <div class="search"></div>
    </div>
    <div class="song-wrap">
      <van-tabs v-model="active" swipeable animated sticky :offset-top="40">
        <van-tab :title="tag.name" v-for="tag in tags" :key="tag.id">
          <ul class="song-list">
            <li class="song-list-item" v-for="song in playlist" :key="song.id" @click="selectItem(song.id)">
              <div class="img-wrap">
                <img :src="song.coverImgUrl" />
                <div class="playCount">
                  <span class="iconfont icon-headseterji"></span>
                  <span class="num">{{
                    song.playCount | formatPlayCount
                  }}</span>
                </div>
              </div>
              <div class="name">{{ song.name }}</div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "SongCatlist",
  data() {
    return {
      active: 0,
      tags: [],
      playlist: [],
    };
  },
  created() {
    //获取热门歌单分类
    this.$http("/playlist/hot").then((res) => {
      this.tags = res.data.tags;
        this.getPlaylist();
    });
  },
  methods: {
    getPlaylist() {
      // 获取歌单 ( 网友精选碟 )
      this.$http({
        url: "/top/playlist?",
        params: {
          cat: this.tags[this.active].name,
          limit: 20,
          order: "host",
        },
      }).then((res) => {
        this.playlist = res.data.playlists;
      });
    },
    selectItem(id){
        this.$router.push({
            path: '/playlist',
            query: {
                id
            }
        })
    }
  },
  watch: {
      active(){
          console.log();
          this.getPlaylist()
      }
  }
};
</script>

<style lang="less" scoped>
.song-catlist {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding-bottom: 60px;
  font-size: 14px;
  background: #fff;
  z-index: 10;
  overflow-y: scroll;
}
.header {
  position: sticky;
  top: 0;
  height: 40px;
  width: 100%;
  align-items: center;
  text-align: center;
  color: #000;
  background: #fff;
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
}

.song-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
  overflow: hidden;
  .song-list-item {
    width: 110px;
    margin-top: 10px;
    .img-wrap {
      position: relative;
      height: 110px;
      width: 110px;
      margin: 0 auto;
      background: #dfdfdf;
      border-radius: 5px;
      overflow: hidden;
      .playCount {
        position: absolute;
        top: 0;
        right: 0;
        margin: 5px 5px 0 0;
        padding: 0 5px;
        color: #fff;
        background: hsla(#000, 0.55);
        border-radius: 15px;
        span {
          font-size: 12px;
        }
        .iconfont {
          margin-right: 3px;
        }
      }
    }
    .name {
      margin-top: 5px;
      font-size: 12px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      border-radius: 5px;
      text-align: left;
    }
  }
}
</style>