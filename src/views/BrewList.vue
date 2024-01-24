<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-card v-for="brew in store.brewEntity.brews">
      <ion-button expand="block" @click="router.push({ name: 'BrewView', params: {buid: brew.buid} })">
        <ion-title>{{ brew.title }}</ion-title>
      </ion-button>
    </ion-card>
    <CreationTool />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { brewStore } from "@/store/store.js";
import { useRouter } from 'vue-router';


import CreationTool from '../components/CreationTool.vue';
import { onMounted } from "vue";

const store = brewStore();
const router = useRouter();

onMounted(async() => {
  await store.fetchBrewsFromDB();
})

</script>
