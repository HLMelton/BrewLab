<template>
  <ion-page>
    <ion-content class="ion-padding">
        <ion-card id="hero-card">
          <div id="card-persona"></div>
          <ion-card-header>
            <ion-row class="ion-padding-top ion-margin-top">
                <ion-col id="card-title">
                <ion-card-title class=" ion-margin-start"> {{ focusBrew.title }}</ion-card-title>
                </ion-col>

                <ion-col id="card-subtitle">
                <ion-card-subtitle class=" ion-margin-end">BrewID: {{ buid }}</ion-card-subtitle>
                </ion-col>
            </ion-row>
          </ion-card-header>
        </ion-card>

        <ion-card>
          <ion-card-header class="ion-text-center ion-justify-content-center">
            <ion-card-title>Brewing Details</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-row>
                <ion-col >Device: {{ focusBrew.device }}</ion-col>
                <ion-col>Method: {{ focusBrew.method }}</ion-col>
            </ion-row>
            <ion-row>
              <ion-col>Brew Ratio: {{ focusBrew.ratio }}:1</ion-col>
              <ion-col>Input Weight:{{ focusBrew.inputWeight }}g</ion-col>
            </ion-row>
            <ion-row v-if="focusBrew.brewSteps != null || undefined" v-for="step in focusBrew.brewSteps">
              <!-- <ion-col v-if="focusBrew.bloom === true">Bloom Target:{{ focusBrew.brewSteps[step].weight}}</ion-col> -->
              <!-- <ion-col>Pour Target:{{ focusBrew.brewSteps[step].weight}}</ion-col>
              <ion-col>Pour Timing:{{ focusBrew.brewSteps[step].timing}}</ion-col> -->
            </ion-row>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <ion-card-header class="ion-text-center ion-justify-content-center">
            <ion-card-title>Additional Notes</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-row>
              <ion-col>{{ focusBrew.additionalNotes }}</ion-col>
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
const buid = brewStore.brews[route.query.detail].buid


// onBeforeMount(()=>{
//   console.log(brewStore.brews[route.query.detail])
// })

</script>

<style>
*{
--ion-card-background:#586F7C;
--ion-card-color: white;
}

#hero-card{
  border-radius:2rem ;
  height: 70%;
}

#card-persona{
  height: 70%;
  width: auto;
  background-color: #fff;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2rem;
  text-align: center;
  border-radius: 1rem;
}

#brew-card-content{
background-color: white;
}

#card-title{
text-align:left;
}

#card-subtitle{
text-align: right;
}

</style>
