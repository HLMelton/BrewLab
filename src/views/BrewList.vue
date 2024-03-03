<template>
    <ion-page>
        <ion-content class="ion-padding">
            <ion-card v-for="brew in brewStore.brews">
                <ion-button expand="full" id="list-item"
                    @click="router.push({ name: 'Brew View', query: { detail: Number(brewStore.brews?.indexOf(brew)) } })">
                    <ion-title> {{ brew.brew_detail.title }}</ion-title>
                </ion-button>
            </ion-card>
            <CreationTool />
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">

import { useBrewStore } from "../store/brewStore";
import { RouteParamValueRaw, useRouter } from 'vue-router';

import CreationTool from '../components/CreationTool.vue';
import { onMounted } from "vue";

const brewStore = useBrewStore();
const router = useRouter();

export interface BrewDetail {
    title: string,
    ratio: number,
    device: string,
    method: string,
    inputWeight: number | undefined,
    brewSteps: { weight: number | undefined, timing: string | undefined }[],
    additionalNotes: string | null,
    bloom: boolean,
    brew_detail: RouteParamValueRaw | null,
}

onMounted(async () => {
    await brewStore.fetchBrewsFromDB()
})


</script>

<style scoped>

#list-item{
  margin:0;
}

</style>
