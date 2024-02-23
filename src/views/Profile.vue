<template>
  <ion-page>
    <ion-content>
      <ion-card class="ion-padding ion-margin" id="profileCard"> 
        <img src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-title class=" ion-padding">Username</ion-card-title>
        <ion-card-subtitle class=" ion-padding-start">Test</ion-card-subtitle>
        <ion-card-content>
           <!-- Email: {{ userInfo.confirmed_at }} -->
        </ion-card-content>
      </ion-card>
      <!-- <ion-button @click="console.log(userInfo)" class="ion-padding" expand="block"> Log User </ion-button> -->
      <ion-button @click="handleSignOut" class="ion-padding" expand="block"> Sign Out </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { loadingController, toastController } from '@ionic/vue';
import { supabase } from '../supabase';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

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

// const handleSignOut = async() => {
//   const { error } = await supabase.auth.signOut()
//   console.log('Signed out')
//   router.push('/authentication')
// }

async function getUser(){
  const currentUser = await supabase.auth.getUser()
  console.log(currentUser.data.user)
  return currentUser.data.user
}

</script>

<style scoped>

#profileCard{

}

</style>