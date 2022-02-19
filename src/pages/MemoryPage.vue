<template>
 <base-layout page-title="all my love">
<ion-list>
    <ion-item router-link="/DetailPage">Beach</ion-item>
    <ion-item>mountain</ion-item>
    <ion-item>9</ion-item>
    <ion-item>20</ion-item>
</ion-list> 
    </base-layout>

</template>
<script>  
import {  IonList,IonItem  } from '@ionic/vue';
export default {
    components: {
 
        IonList,
        IonItem
    }
}
</script>
<style scoped>
ion-title {
    text-align: center;
 }
</style>
