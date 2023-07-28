<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Brew Guides</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item
          v-for="brew in brews"
          router-link="`brews/${brew.id}`"
          :key="brew.id"
          >
          <ion-thumbnail slot="start">
            <ion-img :src="brew.img" />
          </ion-thumbnail>
          <ion-label>{{brew.title}}</ion-label>

        </ion-item>
      </ion-list>
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { 
  IonPage, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonThumbnail 
} from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail
},
  // I'll have to wrap this into the onBeforeMounted() so that it can load them before loading the brews onto the page.
  props:{
  },
  setup(props) {
    return{
      brews: [
      // The following is dummy data that should be queried from the server later given user Auth
        {
          id: 1,
          img: 'https://m.media-amazon.com/images/I/71hnawAvxoL.jpg',
          title: 'V60 or sumn',
          details: 'Leggo',
          qr: '',
        },
        {
          id: 2,
          img: 'https://bighousebeans.com/cdn/shop/products/kalita-wave-185-coffee-dripper-177615_1024x1024.jpg?v=1618674708',
          title: 'Kalita? with milk',
          details: 'Pour bro',
          qr: '',
        },
        {
          id: 3,
          img: 'https://storage.googleapis.com/gen-atmedia/3/2018/05/9eada0d203bfb580d801b478edd553465c7afb52.jpeg',
          title: 'Crip Brew',
          details: 'Let it sit',
          qr: '',
        },
        {
          id: 4,
          img: 'data:image/jpeg;base64,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',
          title: 'Masochistic Tendencies',
          details: 'Press me daddy',
          qr: '',
        },
      ],

    }

  }, 
});

</script>
