<template>
  <div id="app" class="music-app">
    <audio :src="`https://music.163.com/song/media/outer/url?id=33894312.mp3`" id="audio" controls autoplay></audio>
    <router-view/>
    <NavBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.music-app {
  max-width: 1024px;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;
  background: #fff;
}

.text-hide {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.text-hide-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
#audio {
  height: 50px;
  position: fixed;
  bottom: 60px;
  z-index: 10;
}
</style>
