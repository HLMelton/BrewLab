import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import BrewList from '../views/BrewList.vue';
import BrewView from '../views/BrewView.vue';
import NewBrew from '../views/NewBrew.vue';
import Profile from '../views/Profile.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/brews'
  },
  {
    path:'/tabs',
    component: TabsPage,
    children:[
      {
        path: '/tabs/brews',
        component: BrewList,
      },
      {
        path:'/tabs/brews/:buid',
        component: () => import('@/views/BrewView.vue'),
      },
      {
        path:'/tabs/brews/new',
        component: () => import('@/views/NewBrew')
      },
      {
        path: '/tabs/profile',
        component: () => import('@/views/Profile.vue'),
      },

    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
