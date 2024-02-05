<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-item>
          <ion-input label="Brew Title" v-model="brewTemplate.title"></ion-input>
        </ion-item>

        <ion-item>
          <ion-range label-placement="start" label="Ratio" v-model="brewTemplate.ratio"></ion-range>
        </ion-item>

        <ion-item>
          <ion-input label="Device" v-model="brewTemplate.device"> </ion-input>
          <ion-input label="Method" v-model="brewTemplate.method"> </ion-input>
        </ion-item>

        <ion-item>
          <ion-input label="Input Weight" v-model="brewTemplate.inputWeight"></ion-input>
        </ion-item>
        
        <ion-item v-for="step in inputSequence">
          <ion-input label="Weight Target"></ion-input>
          <ion-input label="Timing"></ion-input>
        </ion-item>

        <ion-item class="ion-justify-center">
          <ion-button @click="inputSequence.push({})">Add Step</ion-button>
        </ion-item>

        <ion-item>
          <ion-input v-model="brewTemplate.additionalNotes" label="Additional Notes"></ion-input>
        </ion-item>

        <ion-item class="ion-justify-content-center">
          <ion-button slot="end" :disabled="false" @click="console.log(brewTemplate)"> Save </ion-button>
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

const router = useRouter();

const brewTemplate = ref({
  title: '',
  ratio: '',
  device: '',
  method: '',
  inputWeight: null,
  additionalNotes: '',
})

const inputSequence = ref([{}])

const timingSequence = ref([])
const detailSequence = ref([])


const recordNewBrewEntry = async () => {
  await supabase
  .from("brews")
  .insert([{}])
};

function createNewBrewStep() {

};


</script>
