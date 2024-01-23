<template>
  <ion-page>
    <ion-content>
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
});

</script>
