<template>
  <ion-page>
    <ion-list>
      <CuppingSelector focus="Fregarance/Aroma"/>
      <CuppingSelector focus="Flavor"/>
      <CuppingSelector focus="Aftertaste"/>
      <CuppingSelector focus="Acidity"/>
      <CuppingSelector focus="Uniformity" :slider="true" />
      <CuppingSelector focus="Body"/>
      <CuppingSelector focus="Balance"/>
      <CuppingSelector focus="Cleanness" :slider="true" />
      <CuppingSelector focus="Sweetness" :slider="true" />
      <CuppingSelector focus="Overall"/>
      <CuppingSelector focus="Defects"/>
    </ion-list>
  </ion-page>
  
</template>

<script setup lang="ts">

import CuppingSelector from '../components/CuppingSelector.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  
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
</style>