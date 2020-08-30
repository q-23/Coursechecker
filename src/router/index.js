import Vue from 'vue'
import VueRouter from 'vue-router'

import AllCoursesView from '@/views/AllCoursesView.vue'
import FavouriteCurrenciesView from '@/views/FavouriteCurrenciesView';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'All Currencies',
    component: AllCoursesView
  },
  {
    path: '/favourite',
    name: 'Favourite Currencies',
    component: FavouriteCurrenciesView
  },
    { path: '*', redirect: '/' }
  ]

const router = new VueRouter({
  routes
})

export default router
