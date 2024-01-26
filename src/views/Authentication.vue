<template>
  <ion-page>
    <ion-content>
      <ion-button>
        <ion-icon :icon="logoDiscord" @click="handleOAuthLogin()"></ion-icon>
      </ion-button>
      <ion-button> 
        <ion-icon :icon="logoGoogle" @click="handleOAuthLogin()"></ion-icon>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { loadingController, toastController } from '@ionic/vue';
import { supabase } from '../supabase';
import { ref } from 'vue';
import { logoDiscord, logoGoogle } from 'ionicons/icons';

const email = ref('')

const handleOAuthLogin = async() => {
  const loader = await loadingController.create({})
  const toast = await toastController.create({duration: 5000})

  try {
    await loader.present()
    const { error } = await supabase.auth.signInWithOAuth({provider: 'discord'})

    if (error) throw error

    toast.message = 'Check your email for the login link'
    await toast.present()
  } 
  catch (error: any) {
    toast.message = error.message
    await toast.present()
  } 
  finally {
    await loader.dismiss()
  }
}



</script>