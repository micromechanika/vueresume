import Vue from 'vue'
import VueRouter from 'vue-router'

import descktop from '../views/descktop'
import cv from '../views/cv'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/descktop',
    component: descktop
  },
  {
    path: '/',
    redirect: '/descktop',
    component: descktop
  },
  {
    path: '/descktop',
    name: 'descktop',
    component: descktop
  },
  {
    path: '/cv',
    name: 'cv',
    component: cv
  }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
