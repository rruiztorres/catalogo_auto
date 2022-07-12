<template> 
    <div id="mainWrapper"> 
        <img class="logoImg" src="@/assets/img/logo_web_IGN_CNIG.png">

        <h2 class="mainTitle">CATÁLOGO OBJETOS</h2>

        <!-- SELECCION DE ESQUEMA -->
        <v-btn-toggle
            v-model="activeSchema"
            class="schemaSelection"
            active-class="btnActive"
            dense
        > 
            <v-btn
                v-for="schema in schemas"
                :key="schema"
                width="33.33%"
            >{{schema}}
            </v-btn>
        </v-btn-toggle>

        <br/>

        <!-- BARRA BUSQUEDA -->
        <v-text-field
            solo
            prepend-inner-icon="mdi-magnify"
            :append-icon="searchTerm ? 'mdi-close' : 'mdi-close-off'"
            @click:append="searchTerm = ''"
            label="Buscar..."
            dense
            class="searchBar"
            v-model="searchTerm"
        ></v-text-field>


        <!-- MENU CARGA DINAMICA -->
        <v-list dark>
            <v-list-item
                active-class="btnActive"
                dark
                @click="activateItem(commonAttributes)"
            >
                <v-list-item-icon><v-icon>mdi-earth</v-icon></v-list-item-icon>
                <v-list-item-title>Atributos Comunes</v-list-item-title>
            </v-list-item>

            <v-list-group
                v-for="item in items"
                :prepend-icon="item.icon"
                :key="item.group"
                color="#3c8dbc"
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>{{item.group}}</v-list-item-title>
                    </v-list-item-content>
                </template>
                    <v-list-item
                        v-for="element in item.values"
                        :key="element.code"
                        dense
                        active-class="btnActive"
                        dark class="listChild"
                        @click="activateItem(element.active)"
                    >   
                        <v-list-item-icon><v-icon>mdi-square-medium</v-icon></v-list-item-icon>
                        <v-list-item-title>{{element.code}} {{element.title}}</v-list-item-title>
                    </v-list-item>
            </v-list-group>
        </v-list>
    </div>
</template>


<script>
    import axios from 'axios';
    import {getGroupBtnIcon} from '@/assets/mixins/getGroupBtnIcon';
    import {getGroupRtIcon} from '@/assets/mixins/getGroupRtIcon';
    import {classifyGroupBTN} from '@/assets/mixins/classifyGroupBTN';
    import {classifyGroupRT} from '@/assets/mixins/classifyGroupRT';

    export default {
        name: 'Navigation',
        mixins: [getGroupBtnIcon, getGroupRtIcon, classifyGroupBTN, classifyGroupRT],

        data(){
            return{
                apiRoute: process.env.VUE_APP_API,
                schemas: ['BDIG', 'BTN', 'RT'],
                activeSchema: 1,
                items: [],
                searchTerm: undefined,
            }
        },

        watch:{
            activeSchema(){
                this.checkActiveSchema()
            },

            searchTerm(){
                if(this.searchTerm !== undefined){
                    if(this.searchTerm !== ''){
                        //BUSQUEDA DEPENDE DEL ESQUEMA ACTIVO (btn, bdig, rt)
                        if(this.activeSchema === 0){
                            axios
                            .get(this.apiRoute + '/api/v1/bdig/search/' + this.searchTerm)
                            .then((data) => {
                            this.$emit("searchResults", {termino: this.searchTerm, resultados: data.data})
                            })  
                        } else if (this.activeSchema === 1){
                            axios
                            .get(this.apiRoute + '/api/v1/btn/search/' + this.searchTerm)
                            .then((data) => {
                            this.$emit("searchResults", {termino: this.searchTerm, resultados: data.data})
                            })  
                        } else if (this.activeSchema === 2){
                            axios
                            .get(this.apiRoute + '/api/v1/rt/search/' + this.searchTerm)
                            .then((data) => {
                            this.$emit("searchResults", {termino: this.searchTerm, resultados: data.data})
                            })  
                        }
                    } else {
                        this.$emit("searchResults", undefined)
                    }
                }
            }
        },

        created(){
            this.initialize();
        },

        methods: {            
            activateItem(params){
                this.$emit('change', params)
            },
            
            initialize(){
                this.checkActiveSchema()
            },

            checkActiveSchema(){
                if(this.schemas[this.activeSchema] === 'BDIG'){
                    this.getBDIGObjects();
                    this.getCommonAttributes(this.schemas[this.activeSchema]);
                    this.$emit("schemaActive", 'BDIG')
                    //VALORES POR DEFECTO
                    this.$emit('change', {codigo: "0194l", esquema: "BDIG"})
                }
                else if(this.schemas[this.activeSchema] === 'BTN'){
                    this.getBtnObjects();
                    this.getCommonAttributes(this.schemas[this.activeSchema]);
                    this.$emit("schemaActive", 'BTN')
                    //VALORES POR DEFECTO
                    this.$emit('change', {codigo: "0194l", esquema: "BTN"})
                }
                else if(this.schemas[this.activeSchema] === 'RT'){
                    this.getRtObjects();
                    this.getCommonAttributes(this.schemas[this.activeSchema]);
                    this.$emit("schemaActive", 'RT')
                    //VALORES POR DEFECTO
                    this.$emit('change', {codigo: "1101a", esquema: "RT"})
                }
            },

            //BDIG de momento es igual que BTN
            async getBDIGObjects(){
                this.items = [];
                axios
                .get(this.apiRoute + '/api/v1/bdig/objects')
                .then ((data) => {
                    this.btnObjects = data.data.resultados;
                    this.items = this.classifyGroupBTN(this.btnObjects);
                })
            },

            async getBtnObjects(){
                this.items = [];
                axios
                .get(this.apiRoute + '/api/v1/btn/objects')
                .then ((data) => {
                    this.btnObjects = data.data.resultados;
                    this.items = this.classifyGroupBTN(this.btnObjects);
                })
            },

            async getRtObjects(){
                this.items = [];
                axios
                .get(this.apiRoute + '/api/v1/rt/objects')
                .then ((data) => {
                    this.rtObjects = data.data.resultados;
                    this.items = this.classifyGroupRT(this.rtObjects);
                })
            },

            async getCommonAttributes(schema){
                this.commonAttributes = {
                    esquema: schema,
                    active: 'commonAttributes',
                    nombre: 'Atributos Comunes',
                    codigo: null,
                }
            }

        }
    }
</script>

<style scoped>
    h1, h3{
        font-weight: 300 !important;
    }

    .searchBar{
       margin: 1reM !important;
    }

    .menuSelected{
       background-color: red !important;
    }

    .schemaSelection {
        display: block; 
        margin: 0rem 1rem 0rem 1rem;
    }

    .btnActive {
        background-color: #3c8dbc !important;
        color: white !important;
    }

    .mainTitle{
        margin-bottom: 1rem;
        color: #3c8dbc;
        font-weight: 400;
        text-align: center;
    }

    .navMenu {
        padding: 0.5rem;
    }

    .mainList{
        color: white !important; 
    }

    #mainWrapper {
        font-family: 'Red Hat Display';
        font-weight: 400;
        color:white;
    }

    .logoImg{
        margin: 2.25rem 0rem 2rem 0rem;
        width: 100%;
        padding: 0.8rem;
    }

    .listChild{
        margin-left: 0.5rem;
    }

</style>   
