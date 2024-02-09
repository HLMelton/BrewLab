<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-item>
          <ion-input label="Brew Title" v-model="brewTemplate.title"></ion-input>
        </ion-item>

        <ion-item>
          <ion-range :ticks="true" :snaps="true" :min="1" :max="22" :pin="true" label-placement="start" label="Ratio" v-model="brewTemplate.ratio" :pin-formatter="(value: number)=>`1/${value}`"></ion-range>
        </ion-item>

        <ion-item>
          <ion-select label="Method">
            <ion-select-option value="Immersion">Immersion</ion-select-option>
            <ion-select-option value="Percolation">Percolation</ion-select-option>
            <ion-select-option value="Hybrid">Hybrid</ion-select-option>
          </ion-select>
          
          <ion-select label="Device" v-model="brewTemplate.device" class="ion-margin-start">
            <ion-select-option value="V60">V60</ion-select-option>
            <ion-select-option value="Flat Bottom">Flat Bottom</ion-select-option>
            <ion-select-option value="Aeropress">Aeropress</ion-select-option>
            <ion-select-option value="Espresso">Espresso</ion-select-option>
            <ion-select-option value="Cold Brew">Cold Brew</ion-select-option>
          </ion-select>
        </ion-item>

        <ion-item v-if="brewTemplate.bloom === true">
          <ion-input label="Bloom" v-model="brewTemplate.inputWeight"></ion-input>
        </ion-item>

        <ion-item>
          
          
          <ion-input maxlength="3" label="Input Weight" v-model="brewTemplate.inputWeight" ></ion-input>
          <ion-toggle>Default Toggle</ion-toggle>
          <p>Target Weight</p>
          <p> {{+calculateTarget(brewTemplate.inputWeight, brewTemplate.ratio) }} </p>


        </ion-item>

        <ion-item v-for="step in inputSequence">
          <ion-input label="Weight Target" v-if="brewTemplate.bloom === false"></ion-input>
          <ion-input label="Timing"></ion-input>
        </ion-item>

        <ion-item class="ion-justify-center">
          <ion-button @click="inputSequence.push({})">Add Step</ion-button>
        </ion-item>

        <ion-text-area>
          <ion-input v-model="brewTemplate.additionalNotes" label="Additional Notes"></ion-input>
        </ion-text-area>

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
import { ref } from 'vue';

const router = useRouter();

const brewTemplate = ref({
  title: '',
  ratio: 1,
  device: '',
  method: '',
  inputWeight: 0,
  additionalNotes: '',
  bloom: false,
})

const inputSequence = ref([{}])

const timingSequence = ref([])
const detailSequence = ref([])

function calculateTarget(input: number, ratio: number){
  const target = input * ratio
  return target
}

const recordNewBrewEntry = async () => {
  await supabase
  .from("brews")
  .insert([{}])
};

function createNewBrewStep() {

};


</script>