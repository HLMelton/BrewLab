<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Brew Guides</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
      <ion-item>
        <ion-label>Lit like</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>A Chrismas Tree</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Gas in my Pocket</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Aint got no Mini-me</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Divorce Papers</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Das Industry</ion-label>
      </ion-item>
    </ion-list>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList },
});

</script>
