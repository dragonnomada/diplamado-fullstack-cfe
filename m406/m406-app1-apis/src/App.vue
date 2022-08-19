<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style scoped>
#app {
  overflow: hidden;
}

ion-app {
  overflow: hidden;
}

ion-router-outlet {
  overflow: hidden;
}
</style>