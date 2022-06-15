<template> 
    <div id="mainWrapper"> 
        <img class="logoImg" src="@/assets/img/logo_web_IGN_CNIG.png">

        <h2 class="mainTitle">CATÁLOGO OBJETOS</h2>

        <v-list dark>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
            >
                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                    </v-list-item-content>
                </template>

                <v-list-item
                dense
                v-for="child in item.items"
                :key="child.codigo"
                class="listChild"
                link
                dark
                @click="activateItem(child.active)"
                >
                <v-list-item-icon><v-icon v-text="child.icon"></v-icon></v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        <div v-if="child.code && child.code !== 'None'">{{child.code}} _ {{child.title}}</div>
                        <div v-else>{{child.title}}</div>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </div>
</template>


<script>
    import axios from 'axios';
    import {getGroupBtnIcon} from '@/assets/mixins/getGroupBtnIcon';
    import {getGroupRtIcon} from '@/assets/mixins/getGroupRtIcon';

    export default {
        name: 'Navigation',
        mixins: [getGroupBtnIcon, getGroupRtIcon],

        data(){
            return{
                apiRoute: process.env.VUE_APP_API,
                items: [
                        // 0
                        {
                        title: 'BDIG',
                        action: 'mdi-database',
                        active: false,
                        items: [
                            { code: undefined, title: 'Atributos Comunes', icon: 'mdi-earth', active: undefined},
                            { code: '0194l', title: 'Itinerario', icon: 'mdi-road-variant', active: undefined},
                            { code: '0197l', title: 'Vía Pecuaria', icon: 'mdi-road-variant', active: undefined},
                            { code: '0201s', title: 'Edificio', icon: 'mdi-home-city', active: undefined},
                            ],
                        },

                        //1
                        {
                        title: 'BTN',
                        action: 'mdi-map',
                        active: false,
                        items: [],
                        },

                        //2
                        {
                        title: 'RT',
                        action: 'mdi-road-variant',
                        active: false,
                        items: [],
                        },
                    ],
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
                this.getBtnObjects();
                this.getRtObjects();
            },

            async getBtnObjects(){
                axios
                .get(this.apiRoute + '/api/v1/btn/objects')
                .then ((data) => {
                    this.btnObjects = data.data.resultados;
                    this.items[1].items = [];

                    //Atributos Comunes
                    this.items[1].items = [
                        {
                            code: undefined, 
                            title: 'Atributos comunes', 
                            icon: 'mdi-earth',
                            active: {
                                esquema: 'BTN',
                                codigo: undefined,
                            } 
                        }
                    ]

                    //Creamos indice a partir de los objetos
                    for (this.index in this.btnObjects) {
                        this.newBtnObject = {
                            code: this.btnObjects[this.index].codigo, 
                            title: this.btnObjects[this.index].nom_corto, 
                            icon: this.getGroupBtnIcon(this.btnObjects[this.index].codigo), //DEVUELVE UN ICONO
                            active: {
                               esquema: 'BTN',
                               codigo: this.btnObjects[this.index].codigo,
                            }
                        }
                        this.items[1].items.push(this.newBtnObject)
                    }
                })
            },

            async getRtObjects(){
                axios
                .get(this.apiRoute + '/api/v1/rt/objects')
                .then((data) => {
                    this.rtObjects = data.data.resultados;
                    this.items[2].items = [];

                    //Atributos Comunes
                    this.items[2].items = [
                        {
                            code: undefined, 
                            title: 'Atributos comunes', 
                            icon: 'mdi-earth',
                            active: {
                                esquema: 'RT',
                                codigo: undefined,
                            } 
                        }
                    ]

                    //Creamos indice a partir de los objetos
                    for (this.index in this.rtObjects) {
                        this.newRtObject = {
                            code: this.rtObjects[this.index].codigo, 
                            title: this.rtObjects[this.index].nom_corto, 
                            icon: this.getGroupRtIcon(this.rtObjects[this.index].codigo),
                            active: {
                               esquema: 'RT',
                               codigo: this.rtObjects[this.index].codigo,
                            }
                        }
                        this.items[2].items.push(this.newRtObject)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    h1, h3{
        font-weight: 300 !important;
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
        padding: 0.5rem;
    }

    .listChild{
        margin-left: 1rem;
    }

</style>   
