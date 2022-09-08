import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      keepAlive: false // 需要缓存
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      keepAlive: false // 需要缓存
    }
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "info" */ '../views/InformationView.vue'),
    meta: {
      keepAlive: false // 不需要缓存
    }
  },
  {
    path: '/card',
    name: 'card',
    component: () => import(/* webpackChunkName:"card" */ '../views/CardView.vue'),
    meta: {
      keepAlive: true // 需要缓存
    }
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: () => import(/* webpackChunkName:"timeline" */ '../views/TimelineView.vue'),
    meta: {
      keepAlive: true // 需要缓存
    }
  },
  {
    path: '/results',
    name: 'results',
    component: () => import(/* webpackChunkName:"results" */ '../views/FinishView.vue'),
    meta: {
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
