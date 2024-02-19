<template>
  <ion-app>
    <ion-header>
      <ion-toolbar v-if="route.name !== 'Authentication'" id="generalToolbar">
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/tabs" v-if="routsToShowBack && route.name !== 'Profile'"> Back </ion-back-button>
        </ion-buttons>
        <h1 class="ion-text-center"> {{ route.name }} </h1>
      </ion-toolbar>
      
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script setup >
import {IonApp, IonHeader, IonRouterOutlet, IonButton, IonToolbar, useIonRouter, IonContent} from '@ionic/vue';
import { supabase } from './supabase';
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NewBrew from './views/NewBrew.vue';

const route = useRoute();
const router = useRouter();

const handleSignOut = async() => {
  const { error } = await supabase.auth.signOut()
  console.log('Signed out')
  router.push('/authentication')
}

const routsToShowBack = computed(() => {
  return route.name !== 'Brew List' 
})

</script>

<style>

* {
  --ion-background-color:#272932;
  --ion-text-color: #B6C2D9;
  --ion-border-color: #9E90A2;
  --ion-tab-bar-background:#272932;
  --ion-toolbar-background: #272932;
  --ion-tab-bar-color-selected: #4D7EA8;;
  --ion-tab-bar-color:#272932;;
}

ion-button {
  --background: #4D7EA8;
  --border-color: #B6C2D9;
}

ion-back-button{
  --color: #B6C2D9;
}

ion-icon {
  --color: #B6C2D9;
}

ion-tab-button{
  --color: #B6C2D9;
}

/* Material Design styles */
ion-segment-button.md {
  --color: #B6C2D9;
  --color-checked: #4D7EA8;
  --indicator-height: 4px;
}

/* iOS styles */
ion-segment-button.ios {
  --color: #4D7EA8;
  --color-checked: #fff;
  --border-radius: 20px;
}

#generalToolbar{
  font-family: 'Gerhaus';
}
</style>
