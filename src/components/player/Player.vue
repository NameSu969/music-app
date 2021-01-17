<template>
    <div class="player">
        <PlayerHeader :showShare.sync="showShare"/>
        <div class="main">
            <van-swipe class="my-swipe" :autoplay="0" indicator-color="white" :loop="false">
                <van-swipe-item>
                    <PlayerChart/>
                </van-swipe-item>
                <van-swipe-item>
                    <PlayerLyric/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <PlayerFooter/>
        <div class="bg"></div>
        <!-- 分享面板 -->
        <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
        />
    </div>
</template>

<script>
import PlayerHeader from './PlayerHeader'
import PlayerChart from './PlayerChart'
import PlayerLyric from './PlayerLyric'
import PlayerFooter from './PlayerFooter'
import Vue from 'vue';
import { Swipe,SwipeItem,ShareSheet,Toast } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(ShareSheet);
export default {
    name: 'Player',
    components: {
        PlayerHeader,
        PlayerChart,
        PlayerLyric,
        PlayerFooter
    },
    data() {
        return {
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
        }
    },
    methods: {
        onSelect(option) {
            Toast(option.name + '分享成功');
            this.showShare = false;
        },
    },
}
</script>

<style lang="less" scoped>
.player {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    font-size: 14px;
    background: #fff;
    z-index: 99;
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: #3c3c3c;
        z-index: -1;
    }
}
.main {
    height: 100%;
    padding: 40px 0 90px;
    .my-swipe {
        height: 100%
    }
}
</style>