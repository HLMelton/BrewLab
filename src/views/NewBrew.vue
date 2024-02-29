<template>
  <ion-page>
    <ion-content>

      <ion-list lines="none" id="creationCard" class="ion-padding">
        <div id="headerText">
        <h1>Brew Prep</h1>
        </div>
        <ion-item>
          <ion-input label="Title" v-model="brewTemplate.title"> </ion-input>
        </ion-item>
        <ion-item>
          <ion-text class="ion-justify-content-center">Ratio 1:{{ brewTemplate.ratio }} </ion-text>
          <ion-range :ticks="true" :snaps="true" :min="1" :max="22" label-placement="start" aria-label="Ratio" v-model="brewTemplate.ratio" class="ion-padding"></ion-range>
        </ion-item>

        <ion-item>
          <ion-select label="Method" v-model="brewTemplate.method" >
            <ion-select-option value="Immersion">Immersion</ion-select-option>
            <ion-select-option value="Percolation">Percolation</ion-select-option>
            <ion-select-option value="Hybrid">Hybrid</ion-select-option>
          </ion-select>

          <ion-select label="Device" v-model="brewTemplate.device" class="ion-margin-start">

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

        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-input maxlength="3" label="Input Weight:" v-model="brewTemplate.inputWeight"></ion-input>
              </ion-col>

              <ion-col>
                  <ion-toggle  label-placement="start" v-model="brewTemplate.bloom">Bloom</ion-toggle>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>

        <ion-item>
            <ion-text>Final Target Weight:  {{calculateTarget(brewTemplate.inputWeight, brewTemplate.ratio) }} </ion-text>
        </ion-item>
        <div id="headerText">
            <h1>Brew Steps</h1>
        </div>
        <ion-item v-if="brewTemplate.bloom === true">
          <ion-input label="Bloom Ratio"></ion-input>
          <ion-input label="Duration"></ion-input>
        </ion-item>

        <ion-item v-for="step in brewTemplate.brewSteps" >
          <ion-input label="Weight Target" v-model="step.weight"></ion-input>
          <ion-input label="Timing"></ion-input>

        </ion-item>

        <div>
          <ion-grid class="ion-text-center">
            <ion-row>
              <ion-col>
                <ion-button @click="addTemplateStep()" class="ion-padding-start" >Add Step</ion-button>
              </ion-col>
              <ion-col></ion-col>
              <ion-col>
                <ion-button @click="removeTemplateStep()" class="ion-padding-end">Remove Step</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
        <ion-item>
          <ion-input v-model="brewTemplate.additionalNotes" label="Additional Notes" class="ion-padding"></ion-input>
        </ion-item>

        <ion-item>
          <ion-grid class="ion-text-center">
            <ion-row>
              <ion-col></ion-col>
              <ion-col id="submissionButton">
                <ion-button :disabled="false" @click="console.log(brewTemplate)" class="ion-padding-end ion-padding-start">Save</ion-button>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
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

async function commitBrew(brew_detail: BrewDetail){
  const authorid = await supabase.auth.getUser();
  console.log(authorid)
  const { data, error } = await supabase.rpc('commit_brew', 
  {
    authorid, 
    brew_detail
  })
  if(error){
    console.log(error)
  } else{
    console.log(data)
  }
}

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

#submissionButton{
  text-align: center;
}

</style>
