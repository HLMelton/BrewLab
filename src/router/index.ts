//@ts-ignore
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import BrewList from '../views/BrewList.vue';
import BrewView from '../views/BrewView.vue';
import NewBrew from '../views/NewBrew.vue';
import Profile from '../views/Profile.vue';
import Authentication from '../views/Authentication.vue';
import Verify from '../views/Verify.vue'
import { supabase } from '../supabase';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/authentication'
  },
  {
    path:'/authentication',
    name:'Authentication',
    component: Authentication,
  },
  {
    path:'/verify',
    name:'Verify',
    component: Verify,
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
        props: true,
      },
      {
        path:'/tabs/brews/brewView',
        name: 'Brew View',
        component: BrewView,
        props: true,
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

async function getUser(next: any){
  const currentUser = await supabase.auth.getSession()
  if(currentUser.data.session == null){
    next("/authentication")
  }else{
    next();
  }
}

router.beforeEach((to, from, next)=> {
  if(to.meta.requiresAuth){
    getUser(next);
  }else{
    next();
  }

})

export default router

