<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="ion-padding">
        <h1>BrewLab</h1>
        <p>Sign in using Discord below</p>
      </div>
      <ion-list inset="true">
        <form @submit.prevent="handleOAuthLogin">
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="email" name="email" autocomplete type="email"></ion-input>
          </ion-item>
          <div class="ion-text-center">
            <ion-button type="submit" fill="clear">Login</ion-button>
          </div>
        </form>
      </ion-list>
      <p>{{email}}</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { loadingController, toastController } from '@ionic/vue';
// import { supabaseClient } from '../supabase';
import { ref } from 'vue';

const email = ref('')

const handleOAuthLogin = async() => {
  const loader = await loadingController.create({})
  const toast = await toastController.create({duration: 5000})

  try {
    await loader.present()
    const { error } = await supabaseClient.auth.signInWithOAuth({provider: 'discord'})

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