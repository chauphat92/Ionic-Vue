
<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="pageBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title>
          {{ pageTitle }}
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content> 
        <slot />
    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonContent,
  IonBackButton,
  IonButtons
} from "@ionic/vue";
export default {
  props: ["pageTitle", "pageBackLink"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons
  },
};
</script>
<style scoped>
ion-title {
  text-align: center;
}
</style>
