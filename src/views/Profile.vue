<template>
  <ion-page>
    <ion-content>
      <ion-card class="ion-padding ion-margin" id="profileCard"> 
        <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
        <ion-card-title>Username</ion-card-title>
        <ion-card-content>
          User Metadata such as Brews made will be here
        </ion-card-content>
      </ion-card>
      <ion-button @click="handleSignOut" class="ion-padding" expand="block"> Sign Out </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../supabase';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const userInfo = ref('')

const handleSignOut = async() => {
  const { error } = await supabase.auth.signOut()
  console.log('Signed out')
  router.push('/authentication')
}

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