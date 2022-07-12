import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/catalogo_auto',
  routes
})

export default router
