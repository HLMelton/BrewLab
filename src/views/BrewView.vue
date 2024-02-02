<template>
  <ion-page>
    <ion-content class="ion-padding">
        <ion-row>
          <ion-icon></ion-icon>
          <ion-header>{{ store.brewEntity.brews[0].title }}</ion-header>
        </ion-row>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useBrewStore } from '../store/';

const router = useRouter();
const store = brewStore();

const props = defineProps({
  
})

</script>
