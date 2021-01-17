<template>
  <!-- 推荐歌单 -->
  <div class="recommend-song">
    <div class="hd">
      <div class="more">
        <span>更多</span>
        <span class="iconfont icon-next-m"></span>
      </div>
      <h2 class="title" @click="$router.push('/song-catlist')">推荐歌单</h2>
    </div>
    <div class="song-wrap">
      <ul class="song-list" v-if="songlist.length">
        <li
          class="song-list-item"
          v-for="song in songlist"
          :key="song.id"
          @click="selectItem(song.id)"
        >
          <div class="img-wrap">
            <img :src="song.picUrl" :alt="song.name" />
            <div class="playCount">
              <span class="iconfont icon-headseterji"></span>
              <span class="num">{{ song.playCount | formatPlayCount }}</span>
            </div>
          </div>
          <div class="name">{{ song.name }}</div>
        </li>
      </ul>
      <!-- 骨架 -->
      <ul class="song-list" v-else>
        <li class="song-list-item">
          <div class="img-wrap"></div>
          <div
            class="name"
            style="background-color: #dfdfdf; height: 18px"
          ></div>
        </li>
        <li class="song-list-item">
          <div class="img-wrap"></div>
          <div
            class="name"
            style="background-color: #dfdfdf; height: 18px"
          ></div>
        </li>
        <li class="song-list-item">
          <div class="img-wrap"></div>
          <div
            class="name"
            style="background-color: #dfdfdf; height: 18px"
          ></div>
        </li>
        <li class="song-list-item">
          <div class="img-wrap"></div>
          <div
            class="name"
            style="background-color: #dfdfdf; height: 18px"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendSong",
  props: ["songlist"],
  methods: {
    selectItem(id) {
      this.$router.push({
        path: "playList",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.recommend-song {
  padding: 10px 0;
  .hd {
    padding: 10px 0;
    color: #000;
    font-size: 12px;
    text-align: left;
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
  .song-list {
    position: relative;
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .song-list-item {
      margin-right: 10px;
      .img-wrap {
        position: relative;
        height: 100px;
        width: 100px;
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
}
</style>