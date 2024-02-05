//@ts-ignore
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import BrewList from '../views/BrewList.vue';
import BrewView from '../views/BrewView.vue';
import NewBrew from '../views/NewBrew.vue';
import Profile from '../views/Profile.vue';
import Authentication from '../views/Authentication.vue';
import { useUserStore } from '../store/userStore';
import { supabase } from '../supabase';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/authentication'
  },
  {
    path:'/Authentication',
    name:'Authentication',
    component: Authentication,
  },
  {
    path:'/tabs',
    component: TabsPage,
    redirect: '/tabs/brews',
    meta: {
      requiresAuth: true,
    },
    children:[
      {
        path: '/tabs/brews',
        name: 'Brew List',
        component: BrewList,
      },
      {
        path:'/tabs/brews/:buid',
        name: 'Brew View',
        component: BrewView,
      },
      {
        path:'/tabs/brews/new',
        name:'Create Brew',
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

// router.beforeEach(async (to)=> {
//   const userStore = useUserStore()
//   if(to.meta.requiresAuth == true && userStore.user === null){
//     return '/authentication';
//   }

// })

export default router

