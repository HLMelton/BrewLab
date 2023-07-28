<template>
  
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>


  <ion-content class="ion-padding">
    <ion-button id="open-modal" expand="block">Open</ion-button>
    <p>{{ message }}</p>
    <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button @click="cancel()">Cancel</ion-button>
          </ion-buttons>
          <ion-title>Welcome</ion-title>
          <ion-buttons slot="end">
            <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          <ion-label position="stacked">Enter your name</ion-label>
          <ion-input ref="input" type="text" placeholder="Your name"></ion-input>
        </ion-item>
      </ion-content>
    </ion-modal>

  </ion-content>
</template>
  
<script lang="ts">
  import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
  } from '@ionic/vue';
  import { OverlayEventDetail } from '@ionic/core/components';
  import { defineComponent, ref } from 'vue';


  export default defineComponent({
    props: ['title', 'image', 'description'],
    components: {
      IonImg
    },
  }),
  data() {
    return {
      
    }
  }





</script>