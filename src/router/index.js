import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('@/views/Home')          
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import ('@/views/Admin')          
  },
  {
    path: '/admin-dashboard',
    name: 'admin-dashboard',
    component: () => import ('@/views/Admin_dashboard')          
  },
  {
    path: '/user',
    name: 'User',
    component: () => import ('@/views/User')  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  
  },
  {
    path: '/profile',
    beforeEnter() {location.href = 'https://hrhabib.'}
}
]




const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
