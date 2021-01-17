<template>
  <!-- 专栏 -->
  <div class="special-column">
    <ul class="special-column-list">
      <li class="special-column-list-item">
        <div class="img-wrap">
          <span class="iconfont icon-gedan"></span>
        </div>
        <span class="txt">每日推荐</span>
      </li>
      <li class="special-column-list-item" @click="$router.push('/song-catlist')">
        <div class="img-wrap">
          <span class="iconfont icon-gedan"></span>
        </div>
        <span class="txt">分类歌单</span>
      </li>
      <li class="special-column-list-item">
        <div class="img-wrap">
          <span class="iconfont icon-icranking"></span>
        </div>
        <span class="txt">排行榜</span>
      </li>
      <li class="special-column-list-item">
        <div class="img-wrap">
          <span class="iconfont icon-gedan"></span>
        </div>
        <span class="txt">歌手馆</span>
      </li>
      <li class="special-column-list-item">
        <div class="img-wrap">
          <span class="iconfont icon-diantai"></span>
        </div>
        <span class="txt">电台</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'SpecialColumn'
};
</script>

<style lang="less" scoped>
.special-column {
  .special-column-list {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #f8f8f8;
    .special-column-list-item {
      flex: 1;
      text-align: center;
      .img-wrap {
        height: 40px;
        width: 40px;
        line-height: 40px;
        text-align: center;
        margin: 0 auto 5px;
        color: #fc4e46;
        background: #fff1f0;
        border-radius: 50%;
        overflow: hidden;
        .iconfont {
          font-size: 20px;
        }
      }
      .txt {
        font-size: 12px;
      }
    }
  }
}
</style>