<template>
  <ion-page>
    <ion-content class="ion-padding">
        <ion-row class="ion-text-center ion-justify-content-center">
          <ion-icon></ion-icon>

          <h1></h1>
        </ion-row>

        <ion-card>
          <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          <ion-card-header>
            <ion-card-title class="ion-text-center ion-justify-content-center"> {{ focusBrew.title }}</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-row>
              <ion-col>Device: {{ focusBrew.device }}</ion-col>
              <ion-col>Method: {{ focusBrew.method }}</ion-col>

            </ion-row>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header class="ion-text-center ion-justify-content-center">
            <ion-card-title>Brew Details</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-row>
              <ion-col>Brew Ratio: {{ focusBrew.ratio }}:1</ion-col>
              <ion-col>Input Weight:{{ focusBrew.inputWeight }}g</ion-col>
            </ion-row>
            <ion-row v-if="focusBrew.brewSteps != null || undefined" v-for="step in focusBrew.brewSteps">
              <ion-col v-if="focusBrew.bloom === true">Bloom Target:{{ focusBrew.brewSteps[step].weight}}</ion-col>
              <ion-col v-else>Pour Target:{{ focusBrew.brewSteps[step].weight}}</ion-col>
              <ion-col>Pour Timing:{{ focusBrew.brewSteps[step].timing}}</ion-col>
            </ion-row>

            <ion-row>
              <ion-col>Additional Notes: {{ focusBrew.additionalNotes }}</ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>





    </ion-content>
  </ion-page>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useBrewStore } from '../store/brewStore';
import { supabase } from '../supabase';

const router = useRouter();
const route = useRoute();
const brewStore = useBrewStore();

const focusBrew = brewStore.brews[route.query.detail].brew_detail


// onBeforeMount(()=>{
//   console.log(brewStore.brews[route.query.detail])
// })

</script>
