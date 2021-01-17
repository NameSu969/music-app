<template>
  <div class="comment">
      <div class="hd">
          <h2 class="title">评论区 <span>{{commentTotal}}</span></h2>
          <div class="filter">
              <div class="tag" :class="{active:tag == 1}" @click="tag = 1">热门</div>
              <span class="line">|</span>
              <div class="tag" :class="{active:tag == 2}" @click="tag = 2">时间</div>
          </div>
      </div>
      <div class="main">
          <div class="hot-comment" v-if="comments.hotComments.length" v-show="tag == 1">
              <h2 class="title">精彩评论</h2>
              <ul class="comment-list">
                  <li class="item" v-for="item in comments.hotComments" :key="item.commentId">
                      <div class="avatar">
                          <img :src="item.user.avatarUrl" alt="">
                      </div>
                      <div class="right">
                          <div class="name">{{item.user.nickname}}</div>
                          <div class="date">{{item.time}}</div>
                          <div class="text">{{item.content}}</div>
                          <div class="like">
                              <span class="num">{{item.likedCount}}</span>
                              <span class="iconofnt icon-like"></span>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="all-comment">
              <h2 class="title">全部评论</h2>
              <ul class="comment-list">
                  <li class="item" v-for="item in comments.comments" :key="item.commentId">
                      <div class="avatar">
                          <img :src="item.user.avatarUrl" alt="">
                      </div>
                      <div class="right">
                          <div class="name">{{item.user.nickname}}</div>
                          <div class="date">{{item.time}}</div>
                          <div class="text">{{item.content}}</div>
                          <div class="like">
                              <span class="num">{{item.likedCount}}</span>
                              <span class="iconofnt icon-like"></span>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <!-- 发表评论 -->
      <!-- <div class="publish">
          <input type="text" placeholder="写评论..." class="ipt">
          <div class="submit">发送</div>
      </div> -->
  </div>
</template>

<script>
export default {
    name: 'Comment',
    props: ['comments','commentTotal'],
    data() {
        return {
            tag: 1
        }
    },
}
</script>

<style lang="less" scoped>
.comment {
    padding: 20px 15px;
}

.title {
        padding: 15px 0;
        font-size: 14px;
        font-weight: bold;
        span {
            font-weight: normal;
            color: #b1b1b1;
        }
    }

.hd {
    display: flex;
    align-items: center;
    .title {
        flex: 1;
    }
    .filter {
        .tag {
            display: inline-block;
            color: #b1b1b1;
            &.active {
                color: #000;
            }
        }
        .line {
            margin: 0 15px;
        }
    }
}
.comment-list {
    .item {
        display: flex;
        position: relative;
        margin-top: 15px;
        .avatar {
            height: 30px;
            width: 30px;
            background: #dfdfdf;
            border-radius: 50%;
            overflow: hidden;
        }
        .right {
            position: relative;
            padding-right: 50px;
            flex: 1;
            margin-left: 10px;
            color: #b1b1b1;
            .name {
                font-size: 15px;
            }
            .date {
                font-size: 12px;
            }
            .text {
                margin-top: 5px;
                line-height: 20px;
                font-size: 13px;
                color: #000;
            }
            .like {
                position: absolute;
                top: 0;
                right: 0;
                .num {
                    padding-right: 5px;
                }
            }
        }
    }
}
.publish {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    width: 100%;
    font-size: 12px;
    border-top: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    z-index: 1;
    .ipt {
        flex: 1;
        padding: 0 15px;
        &::placeholder {
            color: #b1b1b1;
        }
    }
    .submit {
        width: 50px;
        height: 40px;
        text-align: center;
        color: #b1b1b1;
    }
}
</style>