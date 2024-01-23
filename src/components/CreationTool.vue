<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button>
      <ion-icon :icon="addOutline"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button >
        <ion-icon :icon="enterOutline"></ion-icon>
      </ion-fab-button>
      <ion-fab-button @click="router.push('/tabs/brews/new')">
        <ion-icon :icon="addOutline"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</template>

<script setup lang="ts">
import { IonFab,IonFabButton,IonIcon, IonFabList } from '@ionic/vue';
import { addOutline, enterOutline } from 'ionicons/icons';

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

</script>