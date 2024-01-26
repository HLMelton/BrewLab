<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" v-if="routsToShowBack"> Back </ion-back-button>
          </ion-buttons>
          <ion-button slot="end" v-if="route.name == 'tabs/profile'" @click="handleSignOut" class="ion-padding-end"> Sign Out </ion-button>
        </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonHeader, IonRouterOutlet, IonButton, IonToolbar, useIonRouter, IonContent} from '@ionic/vue';
import { supabase } from './supabase';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const handleSignOut = async() => {
  const { error } = await supabase.auth.signOut()
}

const routsToShowBack = computed(() => {
  return route.name !== 'BrewList' 
})

</script>

<style scoped>

ion-button {
  --background: #7D98A1;
  --background-hover: #A9B4C2;
}

</style>
