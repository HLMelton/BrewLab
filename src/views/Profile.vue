<template>
  <ion-page>
    <ion-content>
      <ion-card class="ion-padding ion-margin" id="profile-card">
        <div id="profile-persona">
          <div id="profile-persona-cutout">
          </div>
        </div>
        <ion-row class="ion-padding-top">
            <ion-col>
                <ion-card-title>{{ profileStore.user.profile_name }}</ion-card-title>
            </ion-col>
            <ion-col>
                <ion-card-title>Total Brews: {{ profileStore.user.brews }}</ion-card-title>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-card-subtitle>{{ profileStore.user.formattedDate }}</ion-card-subtitle>
            </ion-col>
            <ion-col>
                <ion-card-title>Brew Score: {{ profileStore.user.brewScore }}</ion-card-title>
            </ion-col>
        </ion-row>
      </ion-card>
      <ion-button @click="handleSignOut()" class="ion-padding" expand="block"> Sign Out </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { loadingController, toastController } from '@ionic/vue';
import { supabase } from '../supabase';
import { useRoute, useRouter } from 'vue-router';
import { useGearStore } from '../store/gearStore';
import { useProfileStore } from '../store/profileStore';

const route = useRoute();
const router = useRouter();

const profileStore = useProfileStore();
const gearStore = useGearStore();

async function handleSignOut(){
  const loader = await loadingController.create({})
  const toast = await toastController.create({})

  try{
    const { error } = await supabase.auth.signOut()
  } catch(error: any){
    toast.message = error.error_description || error.message
    await toast.present()
  }finally{
    await loader.dismiss()
    router.push('/authentication')
  }
}

onBeforeMount(async() => {
  profileStore.getProfile()
})



</script>

<style scoped>

#profile-card{
    background-color: #586F7C;
    height: 65%;
    border-radius: 2rem;
}

#profile-persona{
    border-radius: 2rem;
    height: 70%;
    background-color: #000;
}

#profile-persona-cutout{
    background-color: #586F7C;
    /* background-image: ; */
    height: 100%;
    width: 100%;
}

</style>
