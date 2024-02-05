<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-card v-for="brew in brewStore.brews">
      <ion-button expand="block" @click="router.push({ name: 'BrewView', params: {buid: brew.buid} })">
        <ion-title>{{ brew.title }}</ion-title>
      </ion-button>
    </ion-card>
    <CreationTool />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { useBrewStore } from "../store/brewStore";
import { useUserStore } from "../store/userStore";
import { useRouter } from 'vue-router';

import CreationTool from '../components/CreationTool.vue';
import { onMounted } from "vue";

const brewStore = useBrewStore();
const userStore = useUserStore();
const router = useRouter();

onMounted(()=> {
  if(userStore.user === null){
    console.log('userStore is Empty, rerouting')
    router.push('/authentication')
  }

  console.log("Current user session")
  console.log(userStore.user)


})

</script>
