// This is essentially the Modal that 

<template>
<!-- <ion-modal :is-open="modalShown">
    <ion-header>
      <ion-toolbar>
        <ion-title slot="start"> {{ brewGuide.title }}</ion-title>
        <ion-button slot="end" @click="isOpen = false" />
      </ion-toolbar>
    </ion-header>
    <ion-content>

    </ion-content>
  </ion-modal> -->

  

</template>
  
<script setup lang="ts">
  import {
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonModal,
    IonButton,
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';

  const props = defineProps([
      'modalShown',
      'brewGuide',
    ])  



  const isOpen = ref(props.modalShown)

</script>