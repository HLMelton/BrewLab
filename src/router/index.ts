import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Brews'
  },
  {
    path:'/Home',
    component: TabsPage,
    children:[
      {
        path: '/Brews',
        component: () => import('@/views/Brews.vue'),
      },
      {
        path: '/brews:id',
        component: () => import('@/components/BrewView.vue')
      },
      {
        path: '/Export',
        component: () => import('@/views/Brewshare/Export.vue')
      },
      {
        path: '/Profile',
        component: () => import('@/views/Profile.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
