<template>
  <ion-item v-if="slider == true" >
    <ion-label position="fixed">{{props.focus}}</ion-label>
    <ion-range :ticks="true" :snaps="true" :max=4 aria-label="{{ props.focus }}" class="ion-padding">
      <ion-icon slot="start" ></ion-icon>
    </ion-range>
  </ion-item>

  <ion-item v-else>
    <ion-label position="fixed">{{ props.focus }}</ion-label>
    <ion-grid >
      <ion-row>
        <ion-col> 6 </ion-col>
        <ion-col> 7</ion-col>
        <ion-col> 8</ion-col>
        <ion-col> 9</ion-col>
      </ion-row>
      <ion-row>
        <ion-col> .00</ion-col>
        <ion-col> .25</ion-col>
        <ion-col> .5</ion-col>
        <ion-col> .75</ion-col>
      </ion-row>
    </ion-grid>
  </ion-item>
</template>

<script setup lang="ts">


import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const props = defineProps({
  focus: String,
  slider: Boolean,
})

</script>

<style scoped>
  ion-grid {
    --ion-grid-columns: 4;
  }

  ion-col {
    background-color: #DADAD9;
    border: solid 1px #EDE6E3;
    color: #36382E;
    text-align: center;
  }

  ion-button {
    --background:#93e9be;
  }
</style>