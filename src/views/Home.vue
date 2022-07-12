<template>
  <v-app id="appWrapper">
    <!-- NAVIGATION -->
    <v-navigation-drawer
      id="drawer"
      v-model="drawer"
      width="340"
      app
    >
      <Navigation 
        @change="changeObject"
        @searchResults="searchResult"
        @schemaActive="sendSchema"
      ></Navigation>
    </v-navigation-drawer>

    <!-- HEADER --> 
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
        <Main 
          :active="activeObject"
          :searchResults="searchTerm"
          :schemaActive="schema"
        ></Main>
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
        drawer: null,
        activeObject: { codigo: "0194l", esquema: "BTN"},    //default
        searchTerm: undefined,
        schema: 'BDIG',
      }
    },

    methods:{
      changeObject(params){
        this.activeObject = params;
      },

      searchResult(results){
        this.searchTerm = results;
      },

      sendSchema(schema){
        this.schema = schema;
      }
    },
  }
</script>

<style>
  #appWrapper {
    font-family: 'Red Hat Display';
    font-weight: 300;
  }

  #drawer {
    background-color: #343a40;
  }

  #mainContent{
    display: inline-flex;
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

  ::-webkit-scrollbar {
        display: none;
    }
</style>