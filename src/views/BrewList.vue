<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-card v-for="brew in brewStore.brews">
      <ion-button expand="block" @click="router.push({ name: 'BrewView', params: {buid: brew.buid.toString()} })">
        <ion-title>{{ brew.title }}</ion-title>
      </ion-button>
    </ion-card>
    <CreationTool />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { useBrewStore } from "../store/brewStore";
import { useRouter } from 'vue-router';

import CreationTool from '../components/CreationTool.vue';
import { onMounted } from "vue";

const brewStore = useBrewStore();
const router = useRouter();



</script>
