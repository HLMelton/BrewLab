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
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
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
