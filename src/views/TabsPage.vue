<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="Brews" href="/tabs/Brews">
          <ion-icon aria-hidden="true" :icon="cafeOutline" />
          <ion-label>Brew Guides</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Export" href="/tabs/Export">
          <ion-icon aria-hidden="true" :icon="beakerOutline" />
          <ion-label>Export Brew</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="Profile" href="/tabs/Profile">
          <ion-icon aria-hidden="true" :icon="personOutline" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import {cafeOutline, personOutline, beakerOutline } from 'ionicons/icons';
</script>
