<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Brews" href="/tabs/brews">
          <ion-icon aria-hidden="true" :icon="cafeOutline" />
          <ion-label>Brew Guides</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="Profile" href="/tabs/profile">
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import {cafeOutline, personOutline } from 'ionicons/icons';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

</script>
