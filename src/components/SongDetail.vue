<template>
  <div class="song-detail">
    <div class="detail">
      <div class="img-wrap">
        <div class="playCount">
          <span class="iconfont icon-play2"></span>
          <span class="num">{{detail.playCount | formatPlayCount}}</span>
        </div>
        <img :src="detail.coverImgUrl" alt="" />
      </div>
      <div class="fr">
        <div class="info">
          <div class="name">{{detail.name}}</div>
          <div class="author">
            <div class="avatar">
              <img v-if="detail.creator" :src="detail.creator.avatarUrl" alt="">
            </div>
            <div v-if="detail.creator" class="username">{{detail.creator.nickname}}</div>
            <div class="gz">+</div>
          </div>
        </div>
        <!-- 介绍 -->
        <div class="introduce" @click="$emit('update:showIntroduce',true)">
            <span class="txt">介绍：{{detail.description}}</span>
            <span class="iconfont icon-next-m"></span>
        </div>
      </div>
      <div class="bg" :style="`background-image: url(${detail.coverImgUrl})`"></div>
    </div>
    <div class="function">
      <div class="ico">
        <span class="iconfont icon-like"></span>
        <span class="txt">{{detail.subscribedCount | formatPlayCount}}</span>
      </div>
      <div class="ico">
        <span class="iconfont icon-pinglun"></span>
        <span class="txt">{{detail.commentCount | formatPlayCount}}</span>
      </div>
      <div class="ico">
        <span class="iconfont icon-fenxiang1"></span>
        <span class="txt">{{detail.shareCount | formatPlayCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongDetail",
  props: ['detail']
};
</script>

<style lang="less" scoped>
.song-detail {
  position: relative;
  margin-bottom: 40px;
}
.detail {
  position: relative;
  display: flex;
  color: #fff;
  padding: 55px 15px 45px;
  overflow: hidden;
  .img-wrap {
    position: relative;
    height: 100px;
    width: 100px;
    border-radius: 10px;
    overflow: hidden;
    background: #dfdfdf;
    .playCount {
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 2px 5px;
      font-size: 12px;
      border-radius: 10px;
      background: hsla(#000,.75);
      .iconfont {
        font-size: 14px;
      }
    }
  }
  .fr {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    margin-left: 20px;
    overflow: hidden;
    .info {
        width: 100%;
        .name {
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }
        .author {
            font-size: 12px;
            margin-top: 10px;
            display: flex;
            align-items: center;
            color: hsla(#fff,.55);
            .avatar {
                height: 20px;
                width: 20px;
                background: #dfdfdf;
                border-radius: 50%;
                overflow: hidden;
            }
            .username {
                margin: 0 5px;
            }
            .gz {
                padding: 0 15px;
                font-size: 18px;
                background: hsla(#fff,.35);
                border-radius: 15px;
            }
        }
    }
    .introduce {
        width: 100%;
        line-height: 20px;
        color: hsla(#fff,.55);
        overflow: hidden;
        font-size: 12px;
        .txt {
            float: left;
            width: 90%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .iconofnt {
            font-size: 12px;
        }
    }
  }
}
.function {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -19px;
  height: 38px;
  line-height: 38px;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: #fff;
  border-radius: 25px;
  box-shadow: 2px 0 5px hsla(#000,.15);
  .ico {
    flex: 1;
    text-align: center;
    color: #000;
    font-size: 12px;
    .iconfont {
      margin-right: 5px;
      font-size: 14px;
    }
  }
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
</style>