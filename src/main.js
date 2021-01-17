import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './config/axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


Vue.filter('formatPlayCount',(num)=>{
  if(num / 100000000 > 1){
    return (num / 100000000).toFixed(1) + '亿'
  }else if(num / 10000 > 1){
    return (num / 10000).toFixed(1) + '万'
  }else {
    return num
  }
})

Vue.filter('formatTime',(second)=> {
  let m = Math.floor(second / 60);
  let s = Math.floor(second % 60)
  return (m < 10 ? '0'+m : m) +':'+ (s < 10 ? '0'+s : s)
})

Vue.filter('formatArtists',(artists)=>{
  return artists.map(item=>item.name).join('/')
})