<template>
    <div>
        
        <!-- VENTANA BUSCADOR (TODO: SACAR A COMPONENTE)-->
        <v-overlay :value='searchTerms !== undefined'>
            <v-card light class="searchWindowResults">
                <v-card-title>
                    <h2>Mostrando resultados para "{{term}}" en {{schemaActive}}</h2>
                    <v-spacer></v-spacer>
                    <v-btn icon large @click="searchTerms = undefined"><v-icon>mdi-close</v-icon></v-btn>
                </v-card-title>

                <v-card-text>
                    <!-- OBJETOS -->
                        <h2>Objetos</h2>
                        <v-data-table
                            class="resultTable"
                            v-if='searchTerms !== undefined'
                            :items="searchTerms.objetosBTN"
                            :headers="objectsHeaders"
                            dense
                            hide-default-footer
                        >
                            <template v-slot:no-data>
                                <br/>
                                <h3>No existen objetos que coincidan con la búsqueda.</h3>
                            </template>

                            <!-- RESUMEN DE DEFINICIONES -->
                            <template v-slot:[`item.definicion`]="{ item }">
                                {{(item.definicion).slice(0,40) + "..."}}
                            </template>  

                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon 
                                color="blue"
                                @click="viewResults(item)"
                                >mdi-eye
                                </v-icon>
                            </template>   
                        </v-data-table>
                        <hr/>
                        <br/>

                    <!-- ATRIBUTOS -->   
                        <h2>Atributos</h2>
                        <v-data-table
                            class="resultTable"
                            v-if='searchTerms !== undefined'
                            :items="searchTerms.atributosBTN"
                            :headers="atributosHeaders"
                            dense
                            hide-default-footer
                        >
                            <template v-slot:no-data>
                                <br/>
                                <h3>No existen atributos que coincidan con la búsqueda.</h3>
                            </template>

                            <!-- RESUMEN DE DEFINICIONES -->
                            <template v-slot:[`item.definicion`]="{ item }">
                                {{(item.definicion).slice(0,40) + "..."}}
                            </template>  

                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon 
                                color="blue"
                                @click="viewResults(item)"
                                >mdi-eye
                                </v-icon>
                            </template>    
                        </v-data-table>
                        <hr/>
                        <br/>

                    <!-- VALORES -->   
                        <h2>Valores</h2>
                        <v-data-table
                            class="resultTable"
                            v-if='searchTerms !== undefined'
                            :items="searchTerms.valoresBTN"
                            :headers="valoresHeaders"
                            dense
                            hide-default-footer
                        >
                            <template v-slot:no-data>
                                <br/>
                                <h3>No existen valores que coincidan con la búsqueda.</h3>
                            </template>

                            <!-- RESUMEN DE DEFINICIONES -->
                            <template v-slot:[`item.definicion`]="{ item }">
                                {{(item.definicion).slice(0,40) + "..."}}
                            </template>  

                            <template v-slot:[`item.actions`]="{ item }">
                                <v-icon 
                                color="blue"
                                @click="viewResults(item)"
                                >mdi-eye
                                </v-icon>
                            </template>    
                        </v-data-table>
                        <hr/>
                        <br/>
                </v-card-text>
            </v-card>
        </v-overlay>
        
        <v-card class="mainContainer" v-if="objeto">
                <h2 class="cardTitle">{{objeto.codigo + " " + objeto.nombre}}</h2>
                <br/>

                <v-tabs
                slider-size="3"
                color="white" 
                grow
                slider-color="blue" 
                background-color="#86a5b8"
                :show-arrows="true"
                >
                    <v-tab>
                        <v-icon left>
                        mdi-earth
                        </v-icon>
                        Datos del objeto
                    </v-tab>

                    <v-tab>
                        <v-icon left>
                        mdi-account
                        </v-icon>
                        Normas de captura
                    </v-tab>

                    <!-- EJEMPLO -->
                    <v-tab>
                        <v-icon left>
                        mdi-earth
                        </v-icon>
                        Visualizador
                    </v-tab>

                    <v-tab-item>
                        <v-card class="contentCard">
                            <v-card-title>               
                                <v-spacer></v-spacer>
                                <v-checkbox
                                    v-if="schemaActive === 'BDIG'"
                                    class="autoCheck"
                                    disabled
                                    :input-value="objeto.actu_bdig"
                                    label="Se actualiza en entorno BDIG"
                                ></v-checkbox>
                                <v-checkbox
                                    v-if="schemaActive === 'BDIG'"
                                    class="autoCheck"
                                    disabled
                                    :input-value="objeto.vis_bdig"
                                    label="Se visualiza en entorno BDIG"
                                ></v-checkbox>
                            </v-card-title>
                            

                            <v-card-text>
                                <v-simple-table class="mainTable">
                                    <tbody>
                                        <!-- esta parte hay que utilizar plantilla -->
                                        <tr>
                                            <td style="width:10%;"><b>NOM.CORTO</b></td>
                                            <td style="width: 68%">{{objeto.nom_corto}}</td>
                                            <td style="width: 10%"><b>GEOMETRIA</b></td>
                                            <td style="width: 12%">{{objeto.geometria}}</td>
                                        </tr>
                                        <tr>
                                            <td><b>DEFINICIÓN</b></td><td colspan="3">{{objeto.definicion}}</td>
                                        </tr>

                                        <!--ATRIBUTOS-->
                                        <tr class="attributeRow">
                                            <td colspan="4"><b>ATRIBUTOS</b></td>
                                        </tr>
                                        <tr v-for="atributo in objeto.attributes" :key="atributo.id">
                                            <td ><b>{{atributo.nom_atrib}}</b></td>
                                            <td colspan="2" class="atribCol">
                                                {{atributo.definicion}}

                                                <!-- SI ES UN CODELIST MOSTRAMOS TABLA DE VALORES -->
                                                <div  class="subTableContainer" v-if="atributo.tipo_valor === 'lista_val'">
                                                    <h4 class="valuesTitle">VALORES</h4>
                                                    <v-simple-table class="subTable">
                                                        <tbody>
                                                            <tr v-for="valor in atributo.values" :key="valor.id">
                                                                <td>{{valor.codigo_val}}</td>
                                                                <td>{{valor.valor}}</td>
                                                                <td>{{valor.definicion}}</td>
                                                            </tr>
                                                        </tbody>
                                                    </v-simple-table>
                                                </div>
                                                <!-- FIN TABLA VALORES ATRIBUTO -->
                                            </td>                              
                                            <td>{{atributo.tipo_valor}}</td>
                                        </tr>
                                    </tbody>
                                </v-simple-table>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <v-card class="contentCard">
                            <v-card-text>
                                <NormaCaptura :objectCode="normActive"></NormaCaptura>
                            </v-card-text>
                        </v-card>
                    </v-tab-item> 

                    <!-- EJEMPLO -->
                    <v-tab-item>
                        <v-card class="contentCard">
                            <v-card-text>
                                Aqui ponemos el mapa
                            </v-card-text>
                        </v-card>
                    </v-tab-item>          
                </v-tabs>
        </v-card>


        <!-- OPCIONES -->
        <v-btn 
        color="blue" 
        dark 
        id="options"
        large
        fab
        elevation="5"
        @click="print"
        ><v-icon>mdi-printer</v-icon></v-btn>

        
    </div>
</template>

<script>
import axios from 'axios';
import NormaCaptura from "@/components/NormasCaptura";

export default {
    name: 'Main',
    components:{NormaCaptura},
    props: ['active', 'searchResults', 'schemaActive'],

    created(){
        this.initialize(this.active);
    },

    watch:{
        active(){
            //CAMBIO DESDE MENU
            this.normActive = this.active
            this.initialize(this.normActive)
        },

        searchResults(){
            if(this.searchResults !== undefined){
                this.searchTerms = this.searchResults.resultados;
                this.term = this.searchResults.termino;
            } else {
               this.searchTerms = undefined;
            }
        },


    },

    methods:{
        async initialize(object){
            //EVITA NORMAS DE CAPTURA VACIAS
            if(this.normActive === undefined ){this.normActive = this.active}

            axios
            .get(this.apiRoute + `/api/v1/${object.esquema}/diccionario/` + object.codigo)
            .then((data) => {
                this.objeto = data.data.objeto;
            })
        },

        viewResults(item){
            this.searchTerms = undefined;
            this.selectObject = {
                codigo: item.tabla,
                esquema: this.schemaActive
            }
            this.normActive = this.selectObject
            this.initialize(this.normActive)
        },

        highLightTerm(term, string){
            if(term !== undefined){
                string = string.split(term);
                for (this.index in string){
                    if(string[this.index] === term){
                        this.hint = `<span style="
                        background-color:#fcffc9; 
                        padding:0.05rem;
                        border: 1px solid lightgray;
                        box-shadow: 1px 1px 1px 1px lightgray;
                        border-radius: 4px;
                        ">
                        </span>`;
                    }
                }
                    
            }

            return string
        },

        print(){
            console.warn("imprimiendo")
        }
    },

    data(){
        return{
            apiRoute: process.env.VUE_APP_API,
            objectCode: undefined,
            objeto: undefined,
            showOptionPanel: false,
            searchTerms: undefined,
            term: undefined,
            normActive: undefined,
            activeTerm: 'i',

            objectsHeaders: [
                { text: "Tabla", align: "start", sortable: false, value: "tabla" },
                { text: "Nombre", align: "start", sortable: false, value: "nombre" },
                { text: "Definción", align: "start", sortable: false, value: "definicion" },
                { text: "Ver", align: "start", sortable: false, value: "actions" },   
            ],

            atributosHeaders: [
                { text: "Tabla", align: "start", sortable: false, value: "tabla" },
                { text: "Nombre", align: "start", sortable: false, value: "nom_atrib" },
                { text: "Definción", align: "start", sortable: false, value: "definicion" },
                { text: "Ver", align: "start", sortable: false, value: "actions" },     
            ],

            valoresHeaders: [
                { text: "Codigo", align: "start", sortable: false, value: "codigo" },
                { text: "Codigo_Val", align: "start", sortable: false, value: "codigo_val" },
                { text: "Valor", align: "start", sortable: false, value: "valor" },
                { text: "Definción", align: "start", sortable: false, value: "definicion" },
                { text: "Ver", align: "start", sortable: false, value: "actions" },     
            ]
        }
    },

}
</script>

<style scoped>

    h2 {
        font-weight: 400;
    }

    td {
        border-right: 1px solid lightgrey;
    }

    #options {
        position: fixed;
        float: right;
        top: 8.4rem;
        right: 1rem;
    }

    .mainContainer{
    margin: 0.5rem 1rem 1rem 1rem;
    background-color: white;
    padding: 1rem;
    max-height: 83vh;
    overflow-y: scroll;
    width: 92%;
    }

    .cardTitle{
        color: #3c8dbc;
    }

    .contentCard{
        margin: 0rem;
        overflow: auto;
    }

    .autoCheck{
        margin-right: 1rem;
        color: #99c5e8;
    }

    .mainTable {
        border: 1px solid lightgray;
        border-right: 0px !important;
        border-radius: 4px;
        box-shadow: 0px 1px 3px 1px lightgray
    }

    .resultTable{
        background-color: #e9f1f7 !important;
    }

    .atribCol {
        padding: 0.5rem !important;
    }
  
    .attributeRow {
        background-color: #99c5e8;
    }

    .subTableContainer {
        margin: 1rem 0rem 1rem 0rem;
        padding: 0.5rem;
    }

    .valuesTitle {
        font-weight: 400;
        margin-bottom: 0.2rem;
    }

    .subTable tbody tr:nth-child(odd) {
	background: #E6E3E3;
    }

    .subTable tbody tr:nth-child(even) {
    background: #F7F7F7;
    }

    .searchWindowResults{
        width: 55rem;
        max-width: 95vw;
        max-height: 80vh;
        padding: 1rem !important;
        overflow-y: scroll;
    }

    ::-webkit-scrollbar {
        all:unset !important;
    }
</style>