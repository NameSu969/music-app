<template>
    <div class="song-introduce">
        <div class="top">
            <span class="iconfont icon-baseline-close-px" @click="$emit('update:showIntroduce',false)"></span>
        </div>
        <div class="header">
            <div class="img-wrap">
                <img :src="detail.coverImgUrl">
            </div>
            <div class="name">{{detail.name}}</div>
        </div>
        <div class="main">
            <div class="tags">
                <div class="title">标签：</div>
                <div class="tag" v-for="(tag,index) in detail.tags" :key="index">{{tag}}</div> 
            </div>
            <div class="content">
               <div class="wrap">
                   <div class="desc">
                       {{detail.description}}
                   </div>
               </div>
            </div>
        </div>
        <div class="bg" :style="bg"></div>
    </div>
</template>

<script>
export default {
    name: 'SongIntroduce',
    props: ['detail'],
    computed: {
        bg(){
            return `background-image: url('${this.detail.coverImgUrl}')`
        }
    },
}
</script>

<style lang="less" scoped>
.song-introduce {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: #78776d;
    z-index: 99;
}
.top {
    position: sticky;
    top: 0;
    height: 40px;
    line-height: 40px;
    text-align: right;
    padding: 0 15px;
    font-size: 24px;
    .iconfont {
        height: 40px;
        width: 40px;
        line-height: 40px;
        font-size: 24px;
        color: #ffff;
    }
}
.header {
    width: 210px;
    margin: 0 auto;
    padding-bottom: 24px;
    font-size: 12px;
    color: #fff;
    overflow: hidden;
    border-bottom: 1px solid hsla(#fff,.15);
    .img-wrap {
        width: 210px;
        height: 210px;
        margin: 20px auto;
        background: #dfdfdf;
        border-radius: 5px;
        overflow: hidden;
    }
    .name {
        font-size: 12px;
        color: #fff;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
}
.main {
    padding: 15px 30px 30px;
    .tags {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #fff;
        .tag {
            margin-left: 5px;
            padding: 3px 10px;
            border-radius: 15px;
            background: hsla(#fff,.15);
        }
    }
    .content {
        position: relative;
        height: 260px;
        width: 100%;
        margin-top: 20px;
        font-size: 12px;
        line-height: 24px;
        color: #fff;
        overflow-x: hidden;
        overflow-y: scroll;
        &::-webkit-scrollbar {
        display: none;
        }
        .wrap {
            position: absolute;
            left: 0;
        }
    }
}
.bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: #38454d;
    filter: blur(20px);
    z-index: -1;
}
</style>