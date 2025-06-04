import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeComponent from '@/views/HomeComponent.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import UserSignup from '@/views/UserSignup.vue'
import UserLogin from '@/views/UserLogin.vue'
import DashBoard from '@/views/DashBoard.vue'
import ComputedProperty from '@/views/ComputedProperty.vue'
import DynamicRoute from '@/views/DynamicRoute.vue'
import PalinDrom from '@/views/PalinDrom.vue'
import BlogView from '@/views/BlogView.vue'
import ParentComponent from '@/views/ParentComponent.vue'
import ChildComponent from '@/views/ChildComponent.vue'
import SignupUser from '@/views/class/SignupUser.vue'
import LoginUser from '@/views/class/LoginUser.vue'
import UserDashboard from '@/views/class/UserDashboard.vue'
import EventParent from '@/views/EventParent.vue'
import PiniaChecked from '@/views/PiniaChecked.vue'
import TestWork from '@/views/class/TestWork.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/hello',
      component: HelloWorld
    },
    
    {
      path: '/home',
      component: HomeComponent
    },
    {
      path: '/signup',
      component: UserSignup
    },
    {
      path: '/login',
      component: UserLogin
    },
    {
      path: '/dashboard',
      component: DashBoard
    },
    {
      path: '/computed',
      component: ComputedProperty
    },
    {
      path: '/palin',
      component: PalinDrom
    },
    {
      path: '/blog',
      name: 'blog',
      component: DynamicRoute
    },
    {
      path: '/blog/:title/:id',
      name: 'blogview',
      component: BlogView
    },
    {
      path: '/parent',
      name: 'parent',
      component: ParentComponent
    },
    {
      path: '/child',
      name: 'child',
      component: ChildComponent
    },
     
    {
      path: '/event',
      name: 'event',
      component: EventParent
    },
    {
      path: '/usignup',
      name: 'usignup',
      component: SignupUser
    },
    {
      path: '/ulogin',
      name: 'ulogin',
      component: LoginUser 
    },
    {
      path: '/:username',
      name: 'udash',
      component: UserDashboard 
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: PiniaChecked 
    },
    {
      path: '/test',
      name: 'test',
      component: TestWork
    },
    {
      path: '/:catchAll(.*)',
      component: PageNotFound
    }
  ],
})

export default router
