<template>
  <ion-page>
    <ion-content>

      <ion-list lines="none" id="creationCard" class="ion-padding">
        <div id="headerText">Brew Prep</div>
        <ion-item>
          <ion-input label="Brew Title" v-model="brewTemplate.title"> </ion-input>
        </ion-item>

        <ion-item>
          <ion-text class="ion-justify-content-center">Ratio 1:{{ brewTemplate.ratio }} </ion-text>
          <ion-range :ticks="true" :snaps="true" :min="1" :max="22" label-placement="start" aria-label="Ratio" v-model="brewTemplate.ratio" class="ion-padding"></ion-range>
        </ion-item>

        <ion-item>
          <ion-select label="Method">
            <ion-select-option value="Immersion">Immersion</ion-select-option>
            <ion-select-option value="Percolation">Percolation</ion-select-option>
            <ion-select-option value="Hybrid">Hybrid</ion-select-option>
          </ion-select>
          
          <ion-select label="Device" v-model="brewTemplate.method" class="ion-margin-start">

            <ion-select-option value="Hario V60">Hario V60</ion-select-option>
            <ion-select-option value="Origami">Origami</ion-select-option>
            <ion-select-option value="Hario Switch">Hario Switch</ion-select-option>
            <ion-select-option value="Chemex">Chemex</ion-select-option>

            <ion-select-option value="Kalita Wave">Kalita Wave</ion-select-option>
            <ion-select-option value="April Dripper">April Dripper</ion-select-option>
            <ion-select-option value="Orea Dripper">Orea Dripper</ion-select-option>
            <ion-select-option value="Hoop Dripper">Hoop Dripper</ion-select-option>
            <ion-select-option value="French Press">French Press</ion-select-option>
            <ion-select-option value="Aeropress">Aeropress</ion-select-option>

            <ion-select-option value="Espresso">Espresso</ion-select-option>
            <ion-select-option value="Cold Brew">Cold Brew</ion-select-option>
          </ion-select>
        </ion-item>
          <ion-grid>
            <ion-row>
              <ion-col class="ion-padding">
                <ion-input maxlength="3" label="Input Weight:" v-model="brewTemplate.inputWeight"></ion-input>
              </ion-col>

              <ion-col class="ion-padding-top ion-margin-top">
                  <ion-toggle  label-placement="start" v-model="brewTemplate.bloom">Bloom</ion-toggle>
              </ion-col>

              <ion-col class="ion-padding-end ion-padding-top ion-margin-top">
                  <ion-text>Target Weight:  {{calculateTarget(brewTemplate.inputWeight, brewTemplate.ratio) }} </ion-text>
              </ion-col>

            </ion-row>
          </ion-grid>

        <ion-item v-if="brewTemplate.bloom === true">
          <ion-input label="Bloom Ratio"></ion-input>
          <ion-input label="Duration"></ion-input>
        </ion-item>

        <ion-item v-for="step in brewTemplate.brewSteps" >
          <ion-input label="Weight Target" v-model="step.weight"></ion-input>
          <ion-input label="Timing"></ion-input>

        </ion-item>

        <ion-item class="ion-justify-center">
          <ion-button @click="addTemplateStep()" slot="start">Add Step</ion-button>
          <ion-button @click="removeTemplateStep()" slot="end"> Remove</ion-button>
        </ion-item>

        <ion-item>
          <ion-input v-model="brewTemplate.additionalNotes" label="Additional Notes" class="ion-padding"></ion-input>
        </ion-item>

        <ion-item class="ion-text-center">
                <ion-button :disabled="false" @click="console.log(brewTemplate)">Save</ion-button>
        </ion-item>

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';
import { supabase } from '../supabase';
import { BrewDetail } from './BrewList.vue';
import { ref } from 'vue';
import { createGesture } from '@ionic/vue';

const router = useRouter();

const brewTemplate = ref<BrewDetail>({
  title: '',
  ratio: 0,
  device: '',
  method: '',
  inputWeight: 0,
  brewSteps: [{weight: 0, timing: '0:00'}],
  additionalNotes: '',
  bloom: false,
  brew_detail: null
})

function calculateTarget(input: number, ratio: number){
  const target = input * ratio
  return target
}

function addTemplateStep(){
  brewTemplate.value.brewSteps.push({weight: 0, timing: '0:00'})
}

function removeTemplateStep(){
  brewTemplate.value.brewSteps.pop()
}

async function commitBrew(brewTemplate: BrewDetail){
  console.log(brewTemplate)
}

// const swipeToRemoveStep = createGesture({

// })

</script>



<style scoped>

#targetWeight > p {
  text-align: center;
  justify-content: center;
}

#creationCard{
  border-radius: 2rem;
}

#headerText{
  text-align: center;
  font-family: 'Gerhaus';
};

</style>