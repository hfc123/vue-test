import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import menu from '@/components/menu/menu'
import head from '@/components/head/head'
import main from '@/components/main'
import footer from '@/components/footer/footer'
import home from '@/components/home/home'
import list from '@/components/list/list'
import goods from '@/components/goods/goods'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
