<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-list lines="none">
        <ion-item>
          <ion-input label="Brew Title" v-model="brewTemplate.title"> </ion-input>
        </ion-item>

        <ion-item>
          <ion-range :ticks="true" :snaps="true" :min="1" :max="22" :pin="true" label-placement="start" label="Ratio" v-model="brewTemplate.ratio" :pin-formatter="(value: number)=>`1:${value}`"></ion-range>
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
        <!-- <ion-item> -->
          <ion-grid>
            <ion-row class="ion-justify-content-center">

              <ion-col>
                <ion-input maxlength="3" label="Input Weight:" v-model="brewTemplate.inputWeight"></ion-input>
              </ion-col>

              <ion-col class="ion-padding ion-text-center">
                <!-- <div id="targetWeight"> -->
                  <ion-toggle  label-placement="start" v-model="brewTemplate.bloom">Bloom</ion-toggle>
                <!-- </div> -->
              </ion-col>

              <ion-col>
                <div id="targetWeight">
                  <p>Target Weight:  {{calculateTarget(brewTemplate.inputWeight, brewTemplate.ratio) }} </p>
                </div>
              </ion-col>

            </ion-row>
          </ion-grid>




        <!-- </ion-item> -->

        <ion-item v-if="brewTemplate.bloom === true">
          <ion-input label="Bloom Ratio"></ion-input>
          <ion-input label="Duration"></ion-input>
        </ion-item>

        <ion-item v-for="step in brewTemplate.brewSteps">
          <ion-input label="Weight Target" v-model="step.weight"></ion-input>
          <ion-input label="Timing"></ion-input>
        </ion-item>

        <ion-item class="ion-justify-center">
          <ion-button @click="addTemplateStep()">Add Step</ion-button>
        </ion-item>

        <ion-item>
          <ion-input v-model="brewTemplate.additionalNotes" label="Additional Notes" class="ion-padding"></ion-input>
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
import { BrewDetail } from './BrewList.vue';
import { mergeProps, onBeforeMount, onMounted, ref } from 'vue';

const router = useRouter();
const inputSequence = ref([{}])

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

</script>



<style scoped>

#targetWeight > p {
  text-align: center;
  justify-content: center;
}
</style>