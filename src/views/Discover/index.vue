<template>
    <div class="discover">
        <Header :show.sync="show"/>
        <div class="container">
            <!-- 轮播图 -->
            <Swiper :banners="banners"/>
            <!-- 栏目 -->
            <SpecialColumn/>
            <!-- 推荐歌单 -->
            <RecommendSong :songlist="songlist"/>
            <!-- 音乐排行榜 -->
            <MusicChart/>
            <!-- 独家推送入口 -->
            <Exclusive :mvlist="exclusive"/>
            <!-- 推荐专属视频 -->
            <RecommendVideo :mvlist="mvlist"/>
        </div>
        <van-popup v-model="show" position="left" :style="{ height: '100%' }">
            <div class="slide-menu">
                <button class="outlogin">退出登录</button>
            </div>
        </van-popup>
    </div>
</template>

<script>
import Header from './Header'
import Swiper from './Swiper'
import SpecialColumn from './SpecialColumn'
import RecommendSong from './RecommendSong'
import MusicChart from './MusicChart'
import Exclusive from './Exclusive'
import RecommendVideo from './RecommendVideo'

import Vue from 'vue';
import { Popup } from 'vant';

Vue.use(Popup);

export default {
    name: 'Discover',
    components: {
        Header,
        Swiper,
        SpecialColumn,
        RecommendSong,
        MusicChart,
        Exclusive,
        RecommendVideo
    },
    data() {
        return {
            banners: [],
            songlist: [],
            exclusive: [],
            mvlist: [],
            show: false,
        }
    },
    created() {
        this.getBanner();
        this.getSonglist();
        this.setExclusive();
        this.getRecommendVideo();
    },
    methods: {
        // 请求banner
        getBanner(){
            this.$http('/banner?type=1').then(res=>{
                this.banners = res.data.banners;
            })
        },
        // 请求歌单列表
        getSonglist(){
            this.$http('/personalized?limit=10').then(res=>{
                this.songlist = res.data.result;
            })
        },
        // 请求独家推送入口
        setExclusive(){
            this.$http('/personalized/privatecontent').then(res=>{
                this.exclusive = res.data.result;
            })
        },
        // 请求专属推荐MV
        getRecommendVideo(){
            this.$http('/personalized/mv').then(res=>{
                this.mvlist = res.data.result;
            })
        },
    },
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 45px 15px 70px;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
  display: none;
  }
}

.slide-menu {
    width: 280px;
    height: 100vh;
    padding: 30px 15px;
    background: #efefef;
}
.outlogin {
    height: 34px;
    width: 100%;
    font-size: 14px;
    color: red;
    text-align: center;
    background: #fff;
    border-radius: 5px;
}
</style>