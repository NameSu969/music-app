<template>
    <div class="search">
        <div class="header">
            <div class="back" @click="$router.back()">
                <span class="iconfont icon-back"></span>
            </div>
            <div class="search-wrap">
                <input type="text" class="ipt" placeholder="认真的雪 - 薛之谦">
                <div class="remove">
                    <span class="iconfont icon-baseline-close-px"></span>
                </div>
            </div>
        </div>
        <transition name="slow-in">
            <div class="banner" v-if="!close">
            <img src="@/assets/109951165635090745.jpg" alt="">
            <div class="close" @click="close = true">
                <span class="iconfont icon-baseline-close-px"></span>
            </div>
        </div>
        </transition>
        <!-- 历史搜索 -->
        <div class="history-keyword">
            <h5>历史</h5>
            <div class="keys">
                <div class="key">1022</div>
                <div class="key">1022</div>
                <div class="key">1022</div>
                <div class="key">1022</div>
                <div class="key">1022</div>
                <div class="key">1022</div>
                <div class="key">1022</div>
                <div class="key">1022</div>
                <div class="key">1022</div>
            </div>
            <div class="remove">
                <span class="iconfont icon-baseline-close-px"></span>
            </div>
        </div>
        <HotBot/>
        <Suggest v-show="false"/>
        <MiniPlayer/>
    </div>
</template>

<script>
import HotBot from './HotBot'
import Suggest from './Suggest'
import MiniPlayer from '@/components/player/MiniPlayer'
export default {
    name: 'Search',
    components: {
        HotBot,
        Suggest,
        MiniPlayer
    },
    data() {
        return {
            close: false, //关闭广告
        }
    },
}
</script>

<style lang="less" scoped>
.search{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    padding: 0 15px 60px;
    font-size: 14px;
    background: #fff;
    z-index: 10;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
.header {
    position: sticky;
    top: 0;
    height: 40px;
    padding: 5px 0;
    display: flex;
    align-items: center;
    z-index: 1;
    background: #fff;
    .back {
        width: 40px;
        height: 40px;
        line-height: 40px;
        .iconfont {
            font-size: 24px;
        }
    }
    .search-wrap {
        position: relative;
        flex: 1;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #dfdfdf;
        .ipt {
            flex: 1;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            padding: 0;
            width: 100%;
            &::placeholder {
                color: #b1b1b1;
            }
        }
        .remove {
            width: 30px;
            text-align: center;
            .iconfont {
                font-size: 24px;
            }
        }
    }
}
.banner {
    height: auto;
    margin: 15px 0;
    background: #dfdfdf;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    .close {
        position: absolute;
        top: 5px;
        right: 5px;
        color: hsla(#fff,.75);
        .iconfont {
            font-size: 14px;
        }
    }
}

.history-keyword {
    margin-top: 15px;
    display: flex;
    align-items: center;
    h5 {
        font-size: 12px;
        color: #000;
    }
    .keys {
        flex: 1;
        display: flex;
        margin: 0 10px;
        position: relative;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
        .key {
            padding: 3px 8px;
            background: #dfdfdf;
            margin-right: 10px;
            font-size: 12px;
            border-radius: 15px;
        }
    }
    .remove {
        font-size: 20px;
    }
}

.slow-in-enter-active,.slow-in-leave-active {
    transition: all .3s ease-in-out;
}
.slow-in-enter,.slow-in-leave-to {
    opacity: 0;
}
</style>