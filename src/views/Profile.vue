<template>
  <ion-page>
    <ion-content>
      <ion-title size="large" class="ion-padding">{{  }}</ion-title>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { supabase } from '../supabase';
import { useUserStore } from '../store/userStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

const handleLogOut = async() => {
  const { error } = await supabase.auth.signOut()
  console.log('Signed out')
  router.push('/authentication')
}

</script>