<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title slot="start">Brew Share</ion-title>
        <ion-segment value="default" >
        <ion-segment-button value="default">
          <ion-label>Export</ion-label>
        </ion-segment-button>
        <ion-segment-button value="segment">
          <ion-label>Import</ion-label>
        </ion-segment-button>
      </ion-segment>
      </ion-toolbar>

    </ion-header>
    <ion-ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Pokémon Yellow</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Mega Man X</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>The Legend of Zelda</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Pac-Man</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Super Mario World</ion-label>
        </ion-item>
      </ion-list>
    </ion-ion-content>

  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonLabel, IonSegment, IonSegmentButton, IonList, IonItem} from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {IonPage, IonLabel, IonSegment, IonSegmentButton, IonList, IonItem},
  });
</script>
