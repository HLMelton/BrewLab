<template>
  <ion-page>
    <ion-content class="ion-padding">

      <ion-segment value="Brewing" :swipeGesture="true" v-model="pageView">
        <ion-segment-button value="Brewing">
          <ion-label>Brewing</ion-label>
          <ion-icon :icon="colorFillOutline"></ion-icon>
        </ion-segment-button>
        <!-- <ion-segment-button value="Beans" >
          <ion-icon :icon="invertModeOutline"></ion-icon>
          <ion-label>Beans</ion-label>
        </ion-segment-button>  -->
        <ion-segment-button value="Gear">
          <ion-icon :icon="apertureOutline"></ion-icon>
          <ion-label>Gear/Details</ion-label>
        </ion-segment-button>
      </ion-segment>

      <!-- Picture present -->
        <ion-card id="hero-card" v-if="focusBrew.title === false">
          <div  id="card-persona"></div>
          <ion-card-header>
            <ion-row class="ion-padding-top ion-margin-top">
                <ion-col id="card-title">
                <ion-card-title class="ion-margin-start" > {{ focusBrew.title }}</ion-card-title>
                </ion-col>

                <ion-col id="card-subtitle">
                <ion-card-subtitle class=" ion-margin-end">BrewID: {{ buid }}</ion-card-subtitle>
                </ion-col>
            </ion-row>
          </ion-card-header>
        </ion-card>

        <ion-card v-else>
          <ion-card-header>
            <ion-row>
                <ion-col id="card-title">
                <ion-card-title class=" ion-margin-start"> {{ focusBrew.title }}</ion-card-title>
                </ion-col>

                <ion-col id="card-subtitle">
                <ion-card-subtitle class=" ion-margin-end">BrewID: {{ buid }}</ion-card-subtitle>
                </ion-col>
            </ion-row>
          </ion-card-header>
        </ion-card>

        <!--  Brewing Details -->

        <ion-card v-if="pageView === 'Brewing'">
          <ion-card-header class="ion-text-center ion-justify-content-center">
            <ion-card-title>Brewing Preperation</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-row>
                <ion-col >Device: {{ focusBrew.device }}</ion-col>
                <ion-col>Method: {{ focusBrew.method }}</ion-col>
            </ion-row>
            <ion-row>
              <ion-col>Brewing Ratio: {{ focusBrew.ratio }}:1</ion-col>
              <ion-col>Coffee Amount: {{ focusBrew.inputWeight }}g</ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>

        <ion-card v-if="pageView === 'Brewing'">
          <ion-card-header class="ion-text-center ion-justify-content-center">
            <ion-card-title>Brewing Steps</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-row v-if="focusBrew.brewSteps != null || undefined" v-for="item in focusBrew.brewSteps">
              <ion-col>Pour Target: {{ item.weight }} </ion-col>
              <ion-col>Timing: {{ item.timing }} </ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>

        <!-- <ion-card v-if="pageView === 'Gear'">
          <ion-card-header class="ion-text-center ion-justify-content-center">
            <ion-card-title>Grinder</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-row>
              <ion-col>Grind Setting</ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card> -->

        <ion-card v-if="pageView === 'Gear'">
          <ion-card-header class="ion-text-center ion-justify-content-center">
            <ion-card-title>Details/Equipment</ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-row>
              <ion-col>Notes: {{ focusBrew.additionalNotes }}</ion-col>
            </ion-row>
          </ion-card-content>
        </ion-card>


    </ion-content>
  </ion-page>
</template>

<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useBrewStore } from '../store/brewStore';
import { supabase } from '../supabase';
import { apertureOutline, cafeOutline, colorFillOutline, invertModeOutline } from 'ionicons/icons';

const router = useRouter();
const route = useRoute();
const brewStore = useBrewStore();

const focusBrew = brewStore.brews[route.query.detail].brew_detail
const buid = brewStore.brews[route.query.detail].buid

const pageView = ref('Brewing')

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
