<template>
  <ion-page>
    <ion-content>

      <!-- <ion-segment value="Brewing" :swipeGesture="true" v-model="pageView">
        <ion-segment-button value="Brewing">
          <ion-label>Brewing</ion-label>
          <ion-icon :icon="colorFillOutline"></ion-icon>
        </ion-segment-button>
        <ion-segment-button value="Beans" >
          <ion-icon :icon="invertModeOutline"></ion-icon>
          <ion-label>Beans</ion-label>
        </ion-segment-button> 
        <ion-segment-button value="Gear">
          <ion-icon :icon="apertureOutline"></ion-icon>
          <ion-label>Gear/Details</ion-label>
        </ion-segment-button>
      </ion-segment> -->

      <ion-list lines="none" id="creationCard" class="ion-padding" v-if="pageView === 'Brewing'">
        <div id="headerText">
        <h1>Brew Prep</h1>
        </div>
        <ion-item>
          <ion-input label="Title" v-model="brewTemplate.title" placeholder="Enter your Brew Title"> </ion-input>
        </ion-item>
        <ion-item>
          <ion-text class="ion-justify-content-center">Ratio 1:{{ brewTemplate.ratio }} </ion-text>
          <ion-range :ticks="true" :snaps="true" :min="1" :max="22" label-placement="start" aria-label="Ratio" v-model="brewTemplate.ratio" class="ion-padding"></ion-range>
        </ion-item>

        <ion-item>
          <ion-select label="Method" v-model="brewTemplate.method" interface="action-sheet" class="method-select">
            <ion-select-option value="Percolation">Percolation</ion-select-option>
            <ion-select-option value="Immersion">Immersion</ion-select-option>
            <ion-select-option value="Hybrid/All">Hybrid/All</ion-select-option>
          </ion-select>

          <ion-select label="Device" v-model="brewTemplate.device"  v-if="brewTemplate.method === 'Percolation'" class="ion-margin-start" interface="action-sheet">
            <ion-select-option value="Hario V60">Hario V60</ion-select-option>
            <ion-select-option value="Espresso">Espresso</ion-select-option>
            <ion-select-option value="Origami">Origami</ion-select-option>
            <ion-select-option value="Hario Switch">Hario Switch</ion-select-option>
            <ion-select-option value="Chemex">Chemex</ion-select-option>
            <ion-select-option value="Kalita Wave">Kalita Wave</ion-select-option>
            <ion-select-option value="April Dripper">April Dripper</ion-select-option>
            <ion-select-option value="Orea Dripper">Orea Dripper</ion-select-option>
            <ion-select-option value="Pure Over">Pure Over</ion-select-option>
          </ion-select>

          <ion-select label="Device" v-model="brewTemplate.device"  v-if="brewTemplate.method === 'Immersion'" class="ion-margin-start" interface="action-sheet">
            <ion-select-option value="Cold Brew">Cold Brew</ion-select-option>
            <ion-select-option value="French Press">French Press</ion-select-option>
          </ion-select>

          <ion-select label="Device" v-model="brewTemplate.device"  v-if="brewTemplate.method === 'Hybrid/All'" class="ion-margin-start" interface="action-sheet">
            <!-- Percolation -->
            <ion-select-option value="Hario V60">Hario V60</ion-select-option>
            <ion-select-option value="Origami">Origami</ion-select-option>
            <ion-select-option value="Hario Switch">Hario Switch</ion-select-option>
            <ion-select-option value="Chemex">Chemex</ion-select-option>
            <ion-select-option value="Kalita Wave">Kalita Wave</ion-select-option>
            <ion-select-option value="April Dripper">April Dripper</ion-select-option>
            <ion-select-option value="Orea Dripper">Orea Dripper</ion-select-option>
            <ion-select-option value="Espresso">Espresso</ion-select-option>
            <ion-select-option value="Pure Over">Pure Over</ion-select-option>
            <!-- Immersion -->
            <ion-select-option value="Cold Brew">Cold Brew</ion-select-option>
            <ion-select-option value="French Press">French Press</ion-select-option>
            <!-- Hybrid -->
            <ion-select-option value="Aeropress">Aeropress</ion-select-option>
            <ion-select-option value="Hoop Dripper">Hoop Dripper</ion-select-option>
          </ion-select>

        </ion-item>

        <ion-item>
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-input maxlength="3" label="Input Weight:" v-model="brewTemplate.inputWeight" placeholder="0"></ion-input>
              </ion-col>

              <ion-col>
                  <ion-toggle  label-placement="start" v-model="brewTemplate.bloom">Bloom</ion-toggle>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>

        <ion-item>
            <ion-text>Final Target Weight:  {{ calculateTarget(brewTemplate.inputWeight, brewTemplate.ratio) }} </ion-text>
        </ion-item>
        <div id="headerText">
            <h1>Brew Steps</h1>
        </div>
        <ion-item v-if="brewTemplate.bloom === true">
          <ion-input label="Bloom Ratio:" placeholder="1:1"></ion-input>
          <ion-input label="Duration:" placeholder="0:00"></ion-input>
        </ion-item>

        <ion-item v-for="step in brewTemplate.brewSteps">
          <ion-input label="Weight Target" v-model="step.weight" placeholder="0"></ion-input>
          <ion-input label="Timing" placeholder="0:00"></ion-input>

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
          <ion-input v-model="brewTemplate.additionalNotes" label="Additional Notes:" class="ion-padding" ></ion-input>
        </ion-item>

        <ion-item>

        </ion-item>

      </ion-list>

      <ion-grid class="ion-text-center">
            <ion-row>
              <ion-col></ion-col>
              <ion-col id="submissionButton">
                <ion-button :disabled="false" @click="commitBrew(brewTemplate)" class="ion-padding-end ion-padding-start">Save</ion-button>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase';

import { apertureOutline, colorFillOutline, invertModeOutline } from 'ionicons/icons';

import { BrewDetail } from './BrewList.vue';


const router = useRouter();

const brewTemplate = ref<BrewDetail>({
  title: '',
  ratio: 1,
  device: '',
  method: 'Hybrid/All',
  inputWeight: undefined,
  brewSteps: [{weight: undefined, timing: undefined}],
  additionalNotes: '',
  bloom: false,
  brew_detail: null
})

const pageView = ref('Brewing')

// Sloppy but works for now
function calculateTarget(input: any, ratio: number){
  const target = input * ratio
  return target
}

function addTemplateStep(){
  brewTemplate.value.brewSteps.push({weight: undefined, timing: undefined})
}

function removeTemplateStep(){
  brewTemplate.value.brewSteps.pop()
}

async function commitBrew(brew_detail: BrewDetail){
  // Exclamation is a questionable fix here but it worked
  const authorid = await supabase.auth.getUser();
  if(brewTemplate.value.title){
    try{
      const { data, error } = await supabase.from('brews').insert([{public_status: true, brew_detail: brewTemplate.value}])
    }catch(error: any){
      console.log(error)
    }finally{
      router.back()
    }
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
