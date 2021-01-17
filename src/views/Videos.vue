<template>
  <div class="videos">
    <van-tabs v-model="active" swipeable animated sticky>
      <van-tab
        :title="item == 0 ? '全部' : item"
        v-for="(item, index) in tags"
        :key="index"
      >
        <div class="list-wrap">
          <div class="list">
          <div
            class="item"
            v-for="song in playlist"
            :key="song.id"
            @click="selectItem(song.id)"
          >
            <div class="img-wrap">
              <img :src="song.cover" alt="" />
              <div class="play">
                <span class="iconfont icon-play"></span>
              </div>
              <div class="playCount">{{ song.playCount }}</div>
            </div>
            <div class="desc">
              <div class="name text-hide-2">{{ song.name }}</div>
              <div class="singer">{{ song.artists | formatArtists }}</div>
            </div>
          </div>
        </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "Videos",
  data() {
    return {
      active: 0,
      tags: ["", "内地", "港台", "欧美", "日本", "韩国"], //分类标签
      playlist: [], //歌单
    };
  },
  created() {
    this.getPlaylist();
  },
  methods: {
    getPlaylist() {
      this.$http({
        url: "/mv/first",
        params: {
          area: this.tags[this.active],
          limit: 30,
        },
      }).then((res) => {
        this.playlist = res.data.data;
      });
    },
    selectItem(mvid) {
      this.$router.push({
        path: "/playVideo",
        query: {
          mvid,
        },
      });
    },
  },
  watch: {
    active() {
      // 更新列表
      this.getPlaylist();
    },
  },
};
</script>

<style lang="less" scoped>
.videos {
  position: relative;
  font-size: 14px;
  padding-bottom: 60px;
  .list-wrap {
    position: relative;
    height: calc(100% - 44px);
    overflow: hidden;
  }
  .list {
    padding: 0 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .item {
      width: 1.65rem;
      margin-top: 10px;
      border-radius: 10px;
      overflow: hidden;
      .img-wrap {
        position: relative;
        height: 0.9rem;
        width: 100%;
        background: #dfdfdf;
        overflow: hidden;
        .play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          .iconfont {
            color: hsla(#fff, 0.75);
            font-size: 48px;
          }
        }
        .playCount {
          position: absolute;
          bottom: 0.05rem;
          right: 0.05rem;
          color: #fff;
          font-size: 12px;
        }
      }
      .desc {
        padding: 6px 3px;
        font-size: 13px;
        background: #fff;
        .singer {
          margin-top: 3px;
          font-size: 12px;
          color: #b1b1b1;
        }
      }
    }
  }
}
</style>