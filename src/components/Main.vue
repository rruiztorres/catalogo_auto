<template>
    <div>
        <!-- VENTANA BUSCADOR (TODO: SACAR A COMPONENTE)-->
        <v-overlay :value='searchTerms !== undefined' absolute>
            <v-card light class="searchWindowResults">
                <v-card-title>
                    <h2>Mostrando resultados para <i><b>"{{term}}"</b></i> en {{schemaActive}}</h2>
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


        <!-- ATRIBUTOS COMUNES -->
        <v-card class="mainContainer" v-if="atributosComunes">
           <h2 class="cardTitle">Atributos Comunes {{atributosComunes.esquema}}</h2>
           <v-simple-table class="mainTable attTable">
                <thead>
                    <tr class="commonAttHeader">
                        <th style="width:15%"><b>NOMBRE ATRIBUTO</b></th>
                        <th style="width:55%"><b>DEFINICION</b></th>
                        <th style="width:10%"><b>TIPO VALOR</b></th>
                        <th style="width:20%"><b>DIFUSIÓN</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="attribute, i in atributosComunes.object" :key=i>
                        <td>{{attribute.nom_atrib}}</td>
                        <td class="atribCol">
                            <div v-if="attribute.values === null">
                                {{attribute.definicion}}
                            </div>
                            <div v-else>
                                {{attribute.definicion}}
                                <div class="subTableContainer">
                                    <h4 class="valuesTitle">VALORES</h4>
                                    <v-simple-table class="subTable">
                                        <tbody>
                                            <tr v-for="value, i in attribute.values" :key="i">
                                                <td>{{value.codigo_val}}</td>
                                                <td>{{value.valor}}</td>
                                                <td>{{value.definicion}}</td>
                                            </tr>
                                        </tbody>
                                    </v-simple-table>
                                </div>
                            </div>
                        </td>
                        <td>{{attribute.tipo_valor}}</td>
                        <td v-if="attribute.dif_interna === true">En difusión</td>
                        <td v-else><b>Sólo disponible difusión interna</b></td>
                    </tr>
                </tbody>
           </v-simple-table>
        </v-card>

        <!-- VENTANA PRINCIPAL -->
        <v-card class="mainContainer" v-if="objeto">
                <v-card-title>
                    <h2 class="cardTitle">{{objeto.codigo + " " + objeto.nombre}}</h2>                 
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
                                <td style="width: 68%"><text-highlight :queries="queries">{{objeto.nom_corto}}</text-highlight></td>
                                <td style="width: 10%"><b>GEOMETRIA</b></td>
                                <td style="width: 12%"><text-highlight :queries="queries">{{objeto.geometria}}</text-highlight></td>
                            </tr>
                            <tr>
                                <td><b>DEFINICIÓN</b></td><td colspan="3"><text-highlight :queries="queries">{{objeto.definicion}}</text-highlight></td>
                            </tr>

                            <!--ATRIBUTOS-->
                            <tr class="attributeRow">
                                <td colspan="4"><b>ATRIBUTOS</b></td>
                            </tr>
                            <tr v-for="atributo in objeto.attributes" :key="atributo.id">
                                <td ><b><text-highlight :queries="queries">
                                    {{atributo.nom_atrib}}</text-highlight></b>
                                    <br/>
                                    <span v-if="atributo.nom_codigo !== null && schemaActive !== 'RT'">({{atributo.nom_codigo}})</span>
                                    
                                </td>
                                <td colspan="2" class="atribCol">
                                    {{atributo.definicion}}

                                    <!-- SI ES UN CODELIST MOSTRAMOS TABLA DE VALORES -->
                                    <div  class="subTableContainer" v-if="atributo.tipo_valor === 'lista_val'">
                                        <h4 class="valuesTitle">VALORES</h4>
                                        <v-simple-table class="subTable">
                                            <tbody>
                                                    <tr v-for="valor in atributo.values" :key="valor.id">
                                                        <td><text-highlight :queries="queries">{{valor.codigo_val}}</text-highlight></td>
                                                        <td><text-highlight :queries="queries">{{valor.valor}}</text-highlight></td>
                                                        <td><text-highlight :queries="queries">{{valor.definicion}}</text-highlight></td>
                                                    </tr>
                                            </tbody>
                                        </v-simple-table>
                                    </div>
                                    <!-- FIN TABLA VALORES ATRIBUTO -->
                                </td>                              
                                <td><text-highlight :queries="queries">{{atributo.tipo_valor}}</text-highlight></td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-card-text>

                <v-card-text>
                    <!-- NORMAS BTN -->
                    <div v-if="normActive.esquema === 'BTN' || normActive.esquema === 'BDIG'">
                        <Itinerario v-if="normActive.codigo === '0194l'"></Itinerario>
                        <ViaPecuaria v-if="normActive.codigo === '0197l'"></ViaPecuaria>
                        <Edificio v-if="normActive.codigo === '0201s'"></Edificio>
                        <ConstAlmacenaje v-if="normActive.codigo === '0204s'"></ConstAlmacenaje>
                        <OtrasConstruccionesL v-if="normActive.codigo === '0207l'"></OtrasConstruccionesL>
                        <OtrasConstruccionesP v-if="normActive.codigo === '0207p'"></OtrasConstruccionesP>
                        <OtrasConstruccionesS v-if="normActive.codigo === '0207s'"></OtrasConstruccionesS>
                        <ExtracMaterial v-if="normActive.codigo === '0301p'"></ExtracMaterial>
                        <ExtracMaterialZ v-if="normActive.codigo === '0301z'"></ExtracMaterialZ>
                        <AgropecSalinaPisciP v-if="normActive.codigo === '0304p'"></AgropecSalinaPisciP>
                        <AgropecSalinaPisciZ v-if="normActive.codigo === '0304z'"></AgropecSalinaPisciZ>
                        <EnergiaL v-if="normActive.codigo === '0307l'"></EnergiaL>
                        <EnergiaP v-if="normActive.codigo === '0307p'"></EnergiaP>
                        <EnergiaZ v-if="normActive.codigo === '0307z'"></EnergiaZ>
                        <IndustriaServComP v-if="normActive.codigo === '0310p'"></IndustriaServComP>
                        <IndustriaServComZ v-if="normActive.codigo === '0310z'"></IndustriaServComZ>
                        <AdmonEquipSocialP v-if="normActive.codigo === '0313p'"></AdmonEquipSocialP>
                        <AdmonEquipSocialZ v-if="normActive.codigo === '0313z'"></AdmonEquipSocialZ>
                        <CulturaOcioP v-if="normActive.codigo === '0316p'"></CulturaOcioP>
                        <CulturaOcioZ v-if="normActive.codigo === '0316z'"></CulturaOcioZ>
                        <TratAguaResiduosP v-if="normActive.codigo === '0319p'"></TratAguaResiduosP>
                        <TratAguaResiduosZ v-if="normActive.codigo === '0319z'"></TratAguaResiduosZ>
                        <OtrosServInstP v-if="normActive.codigo === '0322p'"></OtrosServInstP>
                        <OtrosServInstZ v-if="normActive.codigo === '0322z'"></OtrosServInstZ>
                        <CursoNaturalL v-if="normActive.codigo === '0401l'"></CursoNaturalL>
                        <CursoNaturalS v-if="normActive.codigo === '0401s'"></CursoNaturalS>
                        <CursoArtificialL v-if="normActive.codigo === '0404l'"></CursoArtificialL>
                        <CursoArtificialS v-if="normActive.codigo === '0404s'"></CursoArtificialS>
                        <LaminaAgua v-if="normActive.codigo === '0407s'"></LaminaAgua>
                        <Embalse v-if="normActive.codigo === '0410s'"></Embalse>
                        <Presa v-if="normActive.codigo === '0413l'"></Presa>
                        <Glaciar v-if="normActive.codigo === '0419s'"></Glaciar>
                        <AguasMarinas v-if="normActive.codigo === '0422s'"></AguasMarinas>
                        <Isla v-if="normActive.codigo === '0425s'"></Isla>
                        <Costa v-if="normActive.codigo === '0428l'"></Costa>
                        <CurvaNivel v-if="normActive.codigo === '0501l'"></CurvaNivel>
                        <PuntoCota v-if="normActive.codigo === '0504p'"></PuntoCota>
                        <CadenaMont v-if="normActive.codigo === '0507l'"></CadenaMont>
                        <Lugar v-if="normActive.codigo === '0510l'"></Lugar>
                        <LugarP v-if="normActive.codigo === '0510p'"></LugarP>
                        <ElementoCostero v-if="normActive.codigo === '0513p'"></ElementoCostero>
                        <ConjElm v-if="normActive.codigo === '0516z'"></ConjElm>
                        <EspNatProt v-if="normActive.codigo ==='0701z'"></EspNatProt>
                    </div>
                    <!-- NORMAS RT -->
                    <div v-if="normActive.esquema === 'RT'">
                        <h2>No hay normas disponibles por el momento</h2>
                    </div>
                </v-card-text>
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

 import Itinerario from "../../public/normas_captura/0194l_itinerario.vue";
import ViaPecuaria from "../../public/normas_captura/0197l_via_pecuaria.vue";
import Edificio from "../../public/normas_captura/0201s_edificio.vue";
import ConstAlmacenaje from "../../public/normas_captura/0204s_constr_almacenaje.vue";
import OtrasConstruccionesL from "../../public/normas_captura/0207l_otras_constr.vue";
import OtrasConstruccionesP from "../../public/normas_captura/0207p_otras_constr.vue";
import OtrasConstruccionesS from "../../public/normas_captura/0207s_otras_constr.vue";
import ExtracMaterial from "../../public/normas_captura/0301p_extrac_material.vue";
import ExtracMaterialZ from "../../public/normas_captura/0301z_extrac_material.vue";
import AgropecSalinaPisciP from "../../public/normas_captura/0304p_agropec_salina_pisci.vue";
import AgropecSalinaPisciZ from "../../public/normas_captura/0304z_agropec_salina_pisci.vue";
import EnergiaL from "../../public/normas_captura/0307l_energia.vue";
import EnergiaP from "../../public/normas_captura/0307p_energia.vue";
import EnergiaZ from "../../public/normas_captura/0307z_energia.vue";
import IndustriaServComP from "../../public/normas_captura/0310p_industria_serv_com.vue";
import IndustriaServComZ from "../../public/normas_captura/0310z_industria_serv_com.vue";
import AdmonEquipSocialP from "../../public/normas_captura/0313p_admon_equip_social.vue";
import AdmonEquipSocialZ from "../../public/normas_captura/0313z_admon_equip_social.vue";
import CulturaOcioP from "../../public/normas_captura/0316p_cultura_ocio.vue";
import CulturaOcioZ from "../../public/normas_captura/0316z_cultura_ocio.vue";
import TratAguaResiduosP from "../../public/normas_captura/0319p_trat_agua_residuos.vue";
import TratAguaResiduosZ from "../../public/normas_captura/0319z_trat_agua_residuos.vue";
import OtrosServInstP from "../../public/normas_captura/0322p_otros_serv_inst.vue";
import OtrosServInstZ from "../../public/normas_captura/0322z_otros_serv_inst.vue";
import CursoNaturalL from "../../public/normas_captura/0401l_curso_natural.vue";
import CursoNaturalS from "../../public/normas_captura/0401s_curso_natural.vue";
import CursoArtificialL from "../../public/normas_captura/0404l_curso_artificial.vue";
import CursoArtificialS from "../../public/normas_captura/0404s_curso_artificial.vue";
import LaminaAgua from "../../public/normas_captura/0407s_lamina_agua.vue";
import Embalse from "../../public/normas_captura/0410s_embalse.vue";
import Presa from "../../public/normas_captura/0413l_presa.vue";
import PuntoHidro from "../../public/normas_captura/0416p_punto_hidro.vue";
import Glaciar from "../../public/normas_captura/0419s_glaciar.vue";
import AguasMarinas from "../../public/normas_captura/0422s_aguas_marinas.vue";
import Isla from "../../public/normas_captura/0425s_isla.vue";
import Costa from "../../public/normas_captura/0428l_costa.vue";
import CurvaNivel from "../../public/normas_captura/0501l_curva_nivel.vue";
import PuntoCota from "../../public/normas_captura/0504p_punto_cota.vue";
import CadenaMont from "../../public/normas_captura/0507l_cadena_mont.vue";
import Lugar from "../../public/normas_captura/0510l_lugar.vue";
import LugarP from "../../public/normas_captura/0510p_lugar.vue";
import ElementoCostero from "../../public/normas_captura/0513p_elemento_costero.vue";
import ConjElem from "../../public/normas_captura/0516z_conjunto_elementos.vue";
import EspNatProt from "../../public/normas_captura/0701z_esp_nat_protegido.vue";

export default {
    name: 'Main',
    props: ['active', 'searchResults', 'schemaActive'],
    components: {
        Itinerario, 
        ViaPecuaria, 
        Edificio,
        ConstAlmacenaje,
        OtrasConstruccionesL,
        OtrasConstruccionesP,
        OtrasConstruccionesS,
        ExtracMaterial,
        ExtracMaterialZ,
        AgropecSalinaPisciP,
        AgropecSalinaPisciZ,
        EnergiaL,
        EnergiaP,
        EnergiaZ,
        IndustriaServComP,
        IndustriaServComZ,
        AdmonEquipSocialP,
        AdmonEquipSocialZ,
        CulturaOcioP,
        CulturaOcioZ,
        TratAguaResiduosP,
        TratAguaResiduosZ,
        OtrosServInstP,
        OtrosServInstZ,
        CursoNaturalL,
        CursoNaturalS,
        CursoArtificialL,
        CursoArtificialS,
        LaminaAgua,
        Embalse,
        Presa,
        PuntoHidro,
        Glaciar,
        AguasMarinas,
        Isla,
        Costa,
        CurvaNivel,
        PuntoCota,
        CadenaMont,
        Lugar,
        LugarP,
        ElementoCostero,
        ConjElem,
        EspNatProt,
    },
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
               //Borra los terminos resaltados si no se le pasan datos
               this.queries = [''];
            }
        },

        //Resalta término buscado en amarillo
        term(){
            this.queries = [this.term]
        }

    },

    methods:{
        async initialize(object){
            //EVITA NORMAS DE CAPTURA VACIAS
            if(this.normActive === undefined ){this.normActive = this.active}
            if(object.active === 'commonAttributes'){
                //SE ACTIVAN LOS ATRIBUTOS COMUNES
                axios
                .get(this.apiRoute + `/api/v1/${object.esquema}/attributes`)
                .then((data) => {
                    this.objeto = undefined;
                    this.atributosComunes = {
                        esquema: object.esquema,
                        object: data.data.atributosComunes,
                    };
                })
            } else {
                //SE ACTIVAN LOS OBJETOS
                axios
                .get(this.apiRoute + `/api/v1/${object.esquema}/diccionario/` + object.codigo)
                .then((data) => {
                    this.objeto = data.data.objeto;
                    this.atributosComunes = undefined;
                })
            }
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

        print(){
            console.warn("Función imprimir no disponible por el momento")
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
            queries: [''],
            atributosComunes: undefined,

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

<style>
    h2, h3 {
        font-weight: 400;
        color: #3c8dbc;
        margin: 0.5rem 0rem 0.5rem 0rem;
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

    .cardTitle {
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

    .attTable {
        font-weight: 400 !important;
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
        padding: 0.6rem;
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

    .commonAttHeader{
        background-color: #99c5e8;
    }

    .picture {
        display: inline-table;
        width: 100%;
        max-width: 40rem;
        margin-right: 1rem;
        
    }

    .picture img {
        width: 100%;
        box-shadow: 2px 2px 3px 0px lightgrey;
    }

 

</style>