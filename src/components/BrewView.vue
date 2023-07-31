// This is essentially the Modal that 

<template>

  
  <ion-header>
    <ion-toolbar>
      <ion-title>Inline Modal</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">



  </ion-content>
</template>
  
<script lang="ts">
  import {
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
  } from '@ionic/vue';
  import { defineComponent, ref } from 'vue';


  export default defineComponent({
    props: [
      'title', 
      'image', 
      'description'],
    components: {
      IonHeader,
      IonContent,
      IonToolbar,
      IonTitle,
    },
    methods: {
      confirm(){

      },
      cancel(){

      }
    },
  })
  





</script>