import Vue from 'vue'
import VueRouter from 'vue-router'
import Discover from '../views/Discover'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/discover'
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: ()=> import('@/components/Playlist')
  },
  {
    path: '/playVideo',
    name: 'playVideo',
    component: ()=> import('@/components/playVideo/PlayVideo')
  },
  {
    path: '/Videos',
    name: 'Videos',
    component: ()=> import('@/views/Videos')
  },
  {
    path: '/song-catlist',
    name: 'SongCatlist',
    component: ()=> import('@/components/SongCatlist')
  },
  {
    path: '/search',
    name: 'search',
    component: ()=> import('@/components/search/Search')
  },{
    path: '/song',
    component: ()=> import('@/components/player/Player')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
