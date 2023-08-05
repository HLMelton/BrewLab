<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Your Profile</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-segment value="default" >
          <ion-segment-button value="default">
            <ion-label>Export</ion-label>
          </ion-segment-button>
          <ion-segment-button value="segment">
            <ion-label>Import</ion-label>
          </ion-segment-button>
        </ion-segment>

    </ion-content>

    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent},
  props: {
  },
});

</script>
