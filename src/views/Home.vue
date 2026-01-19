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

    <!-- MAIN -->
    <v-main id="mainContent">
        <v-btn class="buttonDrawer" dark icon small @click="drawer = !drawer">
          <v-icon v-if="drawer">mdi-chevron-left</v-icon>
          <v-icon v-else>mdi-chevron-right</v-icon>
        </v-btn>

        <img class="logoImg" src="@/assets/img/logo_web_IGN_CNIG.svg">

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
// import Buscador from '@/components/Buscador.vue';
import Main from '@/components/Main.vue';

  export default {
    name: 'home-catalogo',
    components: {Navigation, Main},

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
    background-color: rgb(249, 249, 249) !important;
    padding-left: 1rem !important;
    padding-right: 1rem !important;   
  }

  .buttonDrawer {
    background-color: #99c5e8;
    margin: 0.5rem 1rem;
  }
</style>