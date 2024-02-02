<template>
  <ion-page>
    <ion-toolbar>
    <ion-segment value="Login">
      <ion-segment-button value="Login" @click="registerVisible=false">
        <ion-label>Login</ion-label>
      </ion-segment-button>
      <ion-segment-button value="Register" @click="registerVisible=true">
        <ion-label>Register</ion-label>
      </ion-segment-button>
    </ion-segment>
  </ion-toolbar>
    <div class="ion-padding ion-text-center">
      <h1>BrewLab</h1>
    </div>
    <ion-content class="ion-padding" v-if="registerVisible === false">

      <ion-list>
        <form>

          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="creds.email" name="email" autocomplete type="email" aria-label="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input v-model="creds.password" name="password" autocomplete type="password" aria-label="password"></ion-input>
          </ion-item>

        </form>

        <ion-button shape="round" class="ion-padding " @click="handleEmailLogin(creds)">Login</ion-button>

      
        <!-- <ion-row class="ion-justify-content-center">
          <ion-button shape="round">
            <ion-icon :icon="logoDiscord" @click="handleDiscordLogin()"></ion-icon>
          </ion-button>
          <ion-button shape="round"> 
            <ion-icon :icon="logoGoogle" @click="handleGoogleLogin()"></ion-icon>
          </ion-button>
        </ion-row> -->

      </ion-list>

    </ion-content>

    <ion-content v-if="registerVisible === true">
      <ion-list class="ion-justify-content-center">
        <form>

          <ion-item>
            <ion-label position="stacked">Username</ion-label>
            <ion-input name="userName" aria-label="userName"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="creds.email" name="email" autocomplete type="email" aria-label="email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Password</ion-label>
            <ion-input v-model="creds.password" name="password" autocomplete type="password" aria-label="password"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">Confirm Password</ion-label>
            <ion-input autocomplete type="password" aria-label="password"></ion-input>
          </ion-item>
        </form>

        <ion-button shape="round" class="ion-padding" @click="registerNewUser()">Register</ion-button>

      
        <!-- <ion-row class="ion-justify-content-center">
          <ion-button shape="round">
            <ion-icon :icon="logoDiscord" @click="handleDiscordLogin()"></ion-icon>
          </ion-button>
          <ion-button shape="round"> 
            <ion-icon :icon="logoGoogle" @click="handleGoogleLogin()"></ion-icon>
          </ion-button>
        </ion-row> -->

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { loadingController, toastController } from '@ionic/vue';
import { supabase } from '../supabase';
import { ref } from 'vue';
import { logoDiscord, logoGoogle } from 'ionicons/icons';
import router from '../router';


const creds = ref({
  username: "",
  email: "",
  password: "",
})

const registerVisible = ref(false)

const registerNewUser = async() => {
  const { data, error } = await supabase.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome'
    }
  })
}


const handleEmailLogin = async(creds: {email: string, password: string}) => {
  const loader = await loadingController.create({})
  const toast = await toastController.create({})
  try {
    await loader.present()
    const { error } = await supabase.auth.signInWithPassword({
      email: creds.email,
      password: creds.password,
    })
  }
  catch (error: any) {
    toast.message = error.error_description || error.message
    await toast.present()
  } finally {
    await loader.dismiss()
    if((await supabase.auth.getSession()).data.session !== null){
      console.log(supabase.auth.getSession())
      router.push('/tabs')
    }else{
      console.log('Incorrect login')
    }
  }

}

</script>