<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button
                defaultHref="/"
                v-if="routsToShowBack">
              Back
            </ion-back-button>
          </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonHeader, IonRouterOutlet, IonButton, IonToolbar, useIonRouter, IonContent} from '@ionic/vue';
import { computed } from 'vue';

const route = useIonRouter();

const routsToShowBack = computed(() => {
  return !route.canGoBack;
})

</script>
