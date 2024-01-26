//@ts-ignore
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '@/views/TabsPage.vue';
import BrewList from '@/views/BrewList.vue';
import BrewView from '@/views/BrewView.vue';
import NewBrew from '@/views/NewBrew.vue';
import Profile from '@/views/Profile.vue';
import Authentication from '@/views/Authentication.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/authentication'
  },
  {
    path:'/Authentication',
    component: Authentication,
  },
  {
    path:'/tabs',
    component: TabsPage,
    children:[
      {
        path: '/tabs/brews',
        name: 'BrewList',
        component: BrewList,
      },
      {
        path:'/tabs/brews/:buid',
        name: 'BrewView',
        component: BrewView,
      },
      {
        path:'/tabs/brews/new',
        name:'NewBrew',
        component: NewBrew
      },
      {
        path: '/tabs/profile',
        name:'Profile',
        component: Profile,
      },

    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
