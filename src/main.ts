import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'; 

// Components
import { 
  IonicVue,

  IonPage, 
  IonTitle, 
  IonCardTitle, 
  IonBackButton, 
  IonContent, 

  IonGrid, 
  IonRow, 
  IonCol, 
  IonIcon, 
  IonButtons, 
  IonButton, 
  IonCard, 
  IonCardContent, 
  
  IonToolbar, 
  IonHeader, 
  IonCardSubtitle, 
  IonCardHeader, 
  IonImg, 
  IonAvatar,
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonRange,
  IonAccordion
  } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import './theme/index.css'

const app = createApp(App);
const pinia = createPinia();

app.use(IonicVue);
app.use(pinia);
app.use(router);

app.component('ion-page', IonPage)
app.component('ion-content', IonContent)
app.component('ion-grid', IonGrid)
app.component('ion-row', IonRow)
app.component('ion-col', IonCol)
app.component('ion-icon', IonIcon)
app.component('ion-buttons', IonButtons)
app.component('ion-button', IonButton)
app.component('ion-card', IonCard)
app.component('ion-card-content', IonCardContent)
app.component('ion-back-button', IonBackButton)
app.component('ion-title', IonTitle)
app.component('ion-card-title', IonCardTitle)
app.component('ion-toolbar', IonToolbar)
app.component('ion-header', IonHeader)
app.component('ion-card-subtitle', IonCardSubtitle)
app.component('ion-card-header', IonCardHeader)
app.component('ion-img', IonImg)
app.component('ion-avatar', IonAvatar)
app.component('ion-list',IonList)
app.component('ion-item',IonItem)
app.component('ion-label',IonLabel)
app.component('ion-input',IonInput)
app.component('ion-segment',IonSegment)
app.component('ion-segment-button',IonSegmentButton)
app.component('ion-range',IonRange)
app.component('ion-accordion', IonAccordion)

app.mount('#app');