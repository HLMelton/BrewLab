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

import { useBrewStore } from "../store/brewStore";
import { useRouter } from 'vue-router';


import CreationTool from '../components/CreationTool.vue';
import { onMounted } from "vue";
import { supabase } from "../supabase";

const store = useBrewStore();
const router = useRouter();

onMounted(async() => {
  console.log('Mounted')
  if (supabase.auth.getSession() !== null){
    console.log('fetching brews')
    await store.fetchBrewsFromDB();
  } else {
    console.log('Rerouting due to auth')
    router.push('/authentication')
  }

})

</script>
../store/store