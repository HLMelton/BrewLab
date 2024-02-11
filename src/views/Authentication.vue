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
      <h1 id="heroText">BrewLab</h1>
    </div>

    <ion-content v-if="registerVisible === false">
      <ion-row class="ion-justify-content-center">
      <ion-list class="ion-justify-content-center ion-padding"  id="signupContainer">

          <h1>Sign in</h1>
          <p>to continue to BrewLab</p>

          <div>
            <ion-button class="ion-margin" expand="block" @click="signInWithDiscord()">
              <ion-icon :icon="logoDiscord" slot="start"></ion-icon>
              Sign in with Discord
            </ion-button>
            <!-- <ion-button :disabled="true" class="ion-margin" expand="block"> 
              <ion-icon :icon="logoGoogle" slot="start"></ion-icon> 
              Sign in with Google
            </ion-button> -->
          </div>

          <form>
            <h3 class="text-center">or</h3>

            <ion-item>
              <ion-label position="stacked">Email</ion-label>
              <ion-input v-model="creds.email" name="email" autocomplete type="email" aria-label="email"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Password</ion-label>
              <ion-input v-model="creds.password" name="password" autocomplete type="password" aria-label="password"></ion-input>
            </ion-item>

            <ion-item lines="none" class="ion-align-items-center">
              <ion-grid>
                <ion-row class="ion-align-items-center">
                  <ion-col class="ion-text-center">
                    <ion-button shape="round" class="ion-padding " @click="handleEmailLogin(creds)">Login</ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>
          </form>

      </ion-list>
    </ion-row>
    </ion-content>

    <ion-content v-if="registerVisible === true">

      <ion-row class="ion-justify-content-center">
        <ion-list class="ion-justify-content-center ion-padding" id="signupContainer">
          <h1>Create your account</h1>
          <p>to continue to BrewLab</p>

              <ion-button class="ion-margin" expand="block" @click="signInWithDiscord()">
                <ion-icon :icon="logoDiscord" slot="start"></ion-icon>
                Sign up with Discord
              </ion-button>

              <!-- <ion-button :disabled="true" class="ion-margin" expand="block"> 
                <ion-icon :icon="logoGoogle" slot="start"></ion-icon> 
                Sign up with Google
              </ion-button> -->

          <form>
            <h3 class="text-center">or</h3>


            <ion-item>
              <ion-label position="stacked">Display Name</ion-label>
              <ion-input name="userName" aria-label="userName"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Email</ion-label>
              <ion-input v-model="creds.email" name="email" autocomplete type="email" aria-label="email"></ion-input>
            </ion-item>

            <ion-item >
              <ion-label position="stacked">Password</ion-label>
              <ion-input v-model="creds.password" name="password" autocomplete type="password" aria-label="password"></ion-input>
            </ion-item>

            <ion-item lines="none" class="ion-align-items-center">
              <ion-grid>
                <ion-row class="ion-align-items-center">
                  <ion-col class="ion-text-center">
                    <ion-button shape="round" class="ion-padding ion-justify" @click="handleRegisterUser(creds)">Register</ion-button>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-item>
          </form>

          <div class="ion-padding" v-if="confirmationStatus">
              Check your email to confirm your account. 
          </div>
          
    
        </ion-list>
      </ion-row>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { loadingController, toastController } from '@ionic/vue';
import { supabase } from '../supabase';
import { onBeforeMount, onMounted, ref } from 'vue';
import { colorWandOutline, logoDesignernews, logoDiscord, logoGoogle } from 'ionicons/icons';
import router from '../router';
import { useBrewStore } from '../store/brewStore';

const creds = ref({
  email: "",
  password: "",
  username: "",
})

const registerVisible = ref(false)
const confirmationStatus = ref(false)

async function handleRegisterUser(creds: {email: string, password: string, username: string}) {
  const loader = await loadingController.create({})
  const toast = await toastController.create({})

  try {
    const { data, error } = await supabase.auth.signUp({
    email: creds.email,
    password: creds.password,
    options: {
      emailRedirectTo:'https://brewlab.app',
      data:{
        username: creds.username
      }
    }})
  }catch(error: any){
    toast.message = error.error_description || error.message
    await toast.present()
  }finally{
    await loader.dismiss()
    confirmationStatus.value = true
  }
}

async function handleEmailLogin(creds: {email:string, password: string}) {
  const loader = await loadingController.create({})
  const toast = await toastController.create({})

  try{
    await loader.present()
    const {data, error} = await supabase.auth.signInWithPassword({
      email: creds.email,
      password: creds.password
    })
  }catch(error: any){
    toast.message = error.error_description || error.message
    await toast.present()
  }finally{
    await loader.dismiss()
    router.push('/tabs')
  }
}

async function signInWithDiscord() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
}

async function getUserSession(){
  const userSession = await supabase.auth.getSession()
  return userSession.data.session
}

onBeforeMount(async() => {
  const returning = await getUserSession()
  if(returning !== null){
    router.push('/tabs')
  }
})

</script>

<style scoped>

#heroText{
  font-family:'Gerhaus';
  margin:0
}

h1{
  margin-bottom:0;
}

h3{
  text-align: center;
}

p{
  margin-top: 0
}

#signupContainer{
  border-radius: 1rem;
  margin-left: 5%;
  margin-right: 5%;
}

#submissionContainer{
  justify-content: center;
  align-content: center;
}

.OAuthButton{
  padding-left: 1rem;
  align-items: center;
}

</style>