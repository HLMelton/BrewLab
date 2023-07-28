import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/brews'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/brews'
      },
      {
        path: '/brews',
        component: () => import('@/views/Brews.vue'),
        children: [
          {
            path:'/brews/:id',
            component: () => import('../views/BrewRecipe.vue')
          }
        ],
      },
      {
        path: 'Export',
        component: () => import('@/views/Export.vue')
      },
      {
        path: 'tab3',
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
