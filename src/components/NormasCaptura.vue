<template>
    <div>
        <!-- NORMAS BTN -->
        <div v-if="objectCode.esquema === 'BTN' || objectCode.esquema === 'BDIG'">
            <Itinerario v-if="objectCode.codigo === '0194l'"></Itinerario>
            <ViaPecuaria v-if="objectCode.codigo === '0197l'"></ViaPecuaria>
            <Edificio v-if="objectCode.codigo === '0201s'"></Edificio>
            <ConstAlmacenaje v-if="objectCode.codigo === '0204s'"></ConstAlmacenaje>
            <OtrasConstruccionesL v-if="objectCode.codigo === '0207l'"></OtrasConstruccionesL>
            <OtrasConstruccionesP v-if="objectCode.codigo === '0207p'"></OtrasConstruccionesP>
            <OtrasConstruccionesS v-if="objectCode.codigo === '0207s'"></OtrasConstruccionesS>
            <ExtracMaterial v-if="objectCode.codigo === '0301p'"></ExtracMaterial>
            <ExtracMaterialZ v-if="objectCode.codigo === '0301z'"></ExtracMaterialZ>
            <AgropecSalinaPisciP v-if="objectCode.codigo === '0304p'"></AgropecSalinaPisciP>
            <AgropecSalinaPisciZ v-if="objectCode.codigo === '0304z'"></AgropecSalinaPisciZ>
            <EnergiaL v-if="objectCode.codigo === '0307l'"></EnergiaL>
            <EnergiaP v-if="objectCode.codigo === '0307p'"></EnergiaP>
            <EnergiaZ v-if="objectCode.codigo === '0307z'"></EnergiaZ>
            <IndustriaServComP v-if="objectCode.codigo === '0310p'"></IndustriaServComP>
            <IndustriaServComZ v-if="objectCode.codigo === '0310z'"></IndustriaServComZ>
            <AdmonEquipSocialP v-if="objectCode.codigo === '0313p'"></AdmonEquipSocialP>
            <AdmonEquipSocialZ v-if="objectCode.codigo === '0313z'"></AdmonEquipSocialZ>
            <CulturaOcioP v-if="objectCode.codigo === '0316p'"></CulturaOcioP>
            <CulturaOcioZ v-if="objectCode.codigo === '0316z'"></CulturaOcioZ>
            <TratAguaResiduosP v-if="objectCode.codigo === '0319p'"></TratAguaResiduosP>
            <TratAguaResiduosZ v-if="objectCode.codigo === '0319z'"></TratAguaResiduosZ>
            <OtrosServInstP v-if="objectCode.codigo === '0322p'"></OtrosServInstP>
            <OtrosServInstZ v-if="objectCode.codigo === '0322z'"></OtrosServInstZ>
            <CursoNaturalL v-if="objectCode.codigo === '0401l'"></CursoNaturalL>
            <CursoNaturalS v-if="objectCode.codigo === '0401s'"></CursoNaturalS>
            <CursoArtificialL v-if="objectCode.codigo === '0404l'"></CursoArtificialL>
            <CursoArtificialS v-if="objectCode.codigo === '0404s'"></CursoArtificialS>
            <LaminaAgua v-if="objectCode.codigo === '0407s'"></LaminaAgua>
            <Embalse v-if="objectCode.codigo === '0410s'"></Embalse>
            <Presa v-if="objectCode.codigo === '0413l'"></Presa>
            <Glaciar v-if="objectCode.codigo === '0419s'"></Glaciar>
            <AguasMarinas v-if="objectCode.codigo === '0422s'"></AguasMarinas>
            <Isla v-if="objectCode.codigo === '0425s'"></Isla>
            <Costa v-if="objectCode.codigo === '0428l'"></Costa>
            <CurvaNivel v-if="objectCode.codigo === '0501l'"></CurvaNivel>
            <PuntoCota v-if="objectCode.codigo === '0504l'"></PuntoCota>
            <CadenaMont v-if="objectCode.codigo === '0507l'"></CadenaMont>
            <Lugar v-if="objectCode.codigo === '0510l'"></Lugar>
            <LugarP v-if="objectCode.codigo === '0510p'"></LugarP>
            <ElementoCostero v-if="objectCode.codigo === '0513p'"></ElementoCostero>
            <ConjElm v-if="objectCode.codigo === '0516z'"></ConjElm>
            <EspNatProt v-if="objectCode.codigo ==='0701z'"></EspNatProt>
        </div>

        <div v-if="objectCode.esquema === 'RT'">
            <h2>No disponible por el momento</h2>
        </div>
    </div>  
</template>

<script>
//BTN
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
    name: 'NormasCaptura',
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
    props: ['objectCode'],

    data(){
        return {
            foo: false,
        }
    },
}

</script>

<style>
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

    h2, h3 {
        font-weight: 400;
        color: #3c8dbc;
        margin: 0.5rem 0rem 0.5rem 0rem;
    }

    
</style>