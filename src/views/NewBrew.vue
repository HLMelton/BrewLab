<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-item>
          <ion-input label="Brew Title"></ion-input>
        </ion-item>

        <ion-item>
          <ion-range label-placement="start" label="Ratio"></ion-range>
        </ion-item>

        <ion-item>
          <ion-input label="Device"> </ion-input>
          <ion-input label="Method"> </ion-input>
        </ion-item>

        <ion-item>
          <ion-input label="Input Weight"></ion-input>
        </ion-item>
        
        <ion-item v-for="step in sequence">
          <ion-input label="Weight Target"></ion-input>
          <ion-input label="Timing"></ion-input>
        </ion-item>

        <ion-item class="ion-justify-center">
          <ion-button @click="sequence.push({})">Add Step</ion-button>
        </ion-item>

        <ion-item>
          <ion-input label="Additional Notes"></ion-input>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import { supabase } from '../supabase';
import { useUserStore } from '../store/userStore';
import { ref } from 'vue';

const sequence = ref([{}])

const router = useRouter();

const brewInputFormData = {
  title: '',
}

const recordNewBrewEntry = async () => {
  await supabase
  .from("brews")
  .insert([{}])
};

function createNewBrewStep() {

};


</script>
