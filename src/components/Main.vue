<template>
    <div>
        <v-card class="mainContainer" v-if="objeto">
            <v-card-title>
                <h2 class="cardTitle">{{objeto.codigo + " " + objeto.nombre}}</h2>
                <v-spacer></v-spacer>
                <v-checkbox
                    class="autoCheck"
                    disabled
                    :input-value="objeto.actu_bdig"
                    label="Se actualiza en entorno BDIG"
                ></v-checkbox>
                <v-checkbox
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
                            <td><b>{{atributo.nom_atrib}}</b></td>
                            <td colspan="2">{{atributo.definicion}}

                                <!-- SI ES UN CODELIST MOSTRAMOS TABLA DE VALORES -->
                                <div  class="subTableContainer" v-if="atributo.tipo_valor === 'lista_val'">
                                    <h4 class="valuesTitle">VALORES</h4>
                                    <v-simple-table class="subTable">
                                        <tbody>
                                            <tr v-for="valor in atributo.values" :key="valor.id">
                                                <td>{{valor.codigo_val}}</td>
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
            <v-card-text>
                <NormaCaptura :objectCode="active"></NormaCaptura>
            </v-card-text>
        </v-card>

        
    </div>
</template>

<script>
import axios from 'axios';
import NormaCaptura from "@/components/NormasCaptura";

export default {
    name: 'Main',
    components:{NormaCaptura},
    props: ['active'],

    created(){
        this.initialize(this.active);
    },

    watch:{
        active(){
            this.initialize(this.active)
        }
    },

    methods:{
        async initialize(object){
            axios
            .get(this.apiRoute + `/api/v1/${object.esquema}/diccionario/` + object.codigo)
            .then((data) => {
                this.objeto = data.data.objeto;
            })
        }
    },

    data(){
        return{
            apiRoute: process.env.VUE_APP_API,
            objectCode: '0201s',
            objeto: undefined,
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

    .mainContainer{
    margin-top: 0.5rem;
    background-color: white;
    padding: 1rem;
    }

    .cardTitle{
        color: #3c8dbc;
    }

    .autoCheck{
        margin-right: 1rem;
    }

    .mainTable {
        border: 1px solid lightgray;
        border-right: 0px !important;
        border-radius: 4px;
        box-shadow: 0px 1px 3px 1px lightgray
    }
    
    .attributeRow {
        background-color: #99c5e8;
    }

    .subTableContainer {
        margin: 1rem 0rem 1rem 0rem;
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
</style>