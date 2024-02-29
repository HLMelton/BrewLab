<template>
  <ion-page>
    <ion-toolbar>
      <div class="ion-text-center">
        <h1>Enter your Verification code</h1>
      </div>
    </ion-toolbar>
    <ion-grid>
      <ion-row class="ion-text-center">
        <ion-col />
        <ion-col>
          <ion-input label="Verification Code" label-placement="floating" v-model="verificationToken"></ion-input>
        </ion-col>
        <ion-col />
      </ion-row>
      <ion-row>
        <ion-col/>
        <ion-col class="ion-text-center">
          <ion-button @click="OTPVerification(verificationToken)">Here</ion-button>
        </ion-col>
        <ion-col/>
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<script setup lang="ts">
import { supabase } from '../supabase';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const verificationToken = ref(route.query.verificationToken)

async function OTPVerification(token: any){
  console.log(token)
  try{
    const {data ,error } = await supabase.auth.verifyOtp({token_hash: token, type: 'email'})
    console.log(data)
  }catch(error: any){
    console.log(error)
  }finally{
    router.push('/authentication')
  }
}

</script>

<style scoped>
 h1{
  font-family: 'Gerhaus';
 }

</style>