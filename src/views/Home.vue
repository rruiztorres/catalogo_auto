<template>
  <v-app id="appWrapper">
    <v-navigation-drawer
      id="drawer"
      v-model="drawer"
      width="290"
      app
    >
      <Navigation></Navigation>
    </v-navigation-drawer>

    <v-app-bar app class="mainBar">
      <div class="navBarContainer">
        <v-icon @click="drawer = !drawer" dark>mdi-menu</v-icon>
      </div>
      <div class="headImgContainer">
          <img class="backImage" src="@/assets/img/IGN-Header-Title.png">
      </div>
    </v-app-bar>


    <!-- MAIN -->
    <v-main id="mainContent">
      <Buscador></Buscador>
      <Main></Main>
    </v-main>
  </v-app>
</template>

<script>

import Navigation from '@/components/Navigation.vue';
import Buscador from '@/components/Buscador.vue';
import Main from '@/components/Main.vue';

  export default {
    name: 'Home',
    components: {Navigation, Buscador, Main},

    data(){
      return{
        drawer: null
      }
    }
  }
</script>

<style>
  #appWrapper {
    font-family: 'Red Hat Display';
    font-weight: 300;
    max-height: 94.8vh !important;
    overflow: hidden;
  }

  #drawer {
    background-color: #343a40;
  }

  #mainContent{
    background-color: rgb(249, 249, 249) !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }

  .mainBar {
    background-color: #364b5f !important;
    height: 7rem !important;
  }

  .navBarContainer {
    margin-top: 2.5rem;
  }

  .backImage {
    width: 90vw;
    max-width: 45rem;
    align-items: center;
    object-fit: contain;
    
  }

  .headImgContainer{
    margin: auto auto;
    height: 6.5rem;
    display: flex;
  }
</style>