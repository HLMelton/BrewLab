<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Export Brew</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid>
        <ion-row>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
          <ion-col>4</ion-col>
          <ion-col>5</ion-col>
          <ion-col>6</ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid>
        <ion-row>
          <ion-col>1</ion-col>
          <ion-col>2</ion-col>
          <ion-col>3</ion-col>
          <ion-col>4</ion-col>
          <ion-col>5</ion-col>
          <ion-col>6</ion-col>
          <ion-col>7</ion-col>
          <ion-col>8</ion-col>
          <ion-col>9</ion-col>
          <ion-col>10</ion-col>
          <ion-col>11</ion-col>
          <ion-col>12</ion-col>
        </ion-row>
      </ion-grid>
    </ion-ion-content>

  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonCol, IonGrid, IonRow, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonCol, IonGrid, IonRow, IonPage},
  });
</script>

<style scoped>
  ion-col {
    background-color: #135d54;
    border: solid 1px #fff;
    color: #fff;
    text-align: center;
  }
</style>