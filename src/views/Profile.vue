<template>
  <ion-page>
    <ion-content>
      <!-- <ion-card class="ion-padding ion-margin" id="profile-card">
        <div id="profile-persona">
          <div id="profile-persona-cutout">
          </div>
        </div>
        <ion-row class="ion-padding-top">
            <ion-col>
                <ion-card-title>U:{{userInfo.id}}</ion-card-title>
            </ion-col>
            <ion-col>
                <ion-card-subtitle>R:MM/DD/YYYY</ion-card-subtitle>
            </ion-col>
        </ion-row>
        <ion-card-content>
           {{ userInfo.confirmed_at }}
        </ion-card-content>
      </ion-card> -->
      <ion-button @click="handleSignOut()" class="ion-padding" expand="block"> Sign Out </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { loadingController, toastController } from '@ionic/vue';
import { supabase } from '../supabase';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const userInfo = ref({
  id:'',
  confirmed_at:''
})

async function getUserInfo() {
  const userInfo = await supabase.auth.getUser()
  console.log(userInfo)
}


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

async function getUser(){
  const currentUser = await supabase.auth.getUser()
  console.log(currentUser.data.user)
  return currentUser.data.user
}

onBeforeMount(async() => {
  const userInfo = getUserInfo()
})



</script>

<style scoped>

#profile-card{
    background-color: #586F7C;
    height: 80%;
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
