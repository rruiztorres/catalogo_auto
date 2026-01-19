<template>
  <v-app id="appWrapper">
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
      />
    </v-navigation-drawer>

    <v-main id="mainContent">
      <div class="header">
        <v-btn class="buttonDrawer" dark icon small @click="drawer = !drawer">
          <v-icon v-if="drawer">mdi-chevron-left</v-icon>
          <v-icon v-else>mdi-chevron-right</v-icon>
        </v-btn>
        <img class="imgHead" src="@/assets/img/IGN-Header-Title.png">
      </div>
      <Main 
        :active="activeObject"
        :searchResults="searchTerm"
        :schemaActive="schema"
      />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Main from '@/components/Main.vue';

export default {
  name: 'home-catalogo',
  components: { Navigation, Main },
  data() {
    return {
      drawer: null,
      activeObject: { codigo: "0194l", esquema: "BTN" },
      searchTerm: undefined,
      schema: 'BDIG',
    };
  },
  methods: {
    changeObject(params) {
      this.activeObject = params;
    },
    searchResult(results) {
      this.searchTerm = results;
    },
    sendSchema(schema) {
      this.schema = schema;
    }
  }
};
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
  padding-left: 0rem !important;
  padding-right: 1rem !important;
}

.header {
  position: relative;
  height: 3.7rem;

  background-color: #343a40;
  display: flex;
  align-items: center;
  justify-content: center;
}

.imgHead {
  width: 26rem;
  max-width: 90%;
  height: auto;
}

.buttonDrawer {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: #99c5e8;
  margin: 0;
}
</style>
