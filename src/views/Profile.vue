<template>
  <ion-page>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Profile</ion-title>
        </ion-toolbar>
      </ion-header>
      
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { supabase } from '../supabase';


const handleLogOut = async() => {
  const { error } = await supabase.auth.signOut()
}

</script>
