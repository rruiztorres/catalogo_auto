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
                :key="child.title"
                class="listChild"
                link
                dark
                >
                <v-list-item-icon><v-icon v-text="child.icon"></v-icon></v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>
                        <div v-if="child.code">{{child.code}} _ {{child.title}}</div>
                        <div v-else>{{child.title}}</div>
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </div>
</template>


<script>
    export default {
        name: 'Navigation',
        data(){
            return{
                items: [
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
                        {
                        title: 'BTN',
                        action: 'mdi-map',
                        active: false,
                        items: [
                            { code: '0194l', title: 'Itinerario', icon: 'mdi-road-variant' },
                            { code: '0194l', title: 'Itinerario', icon: 'mdi-road-variant' },
                            ],
                        },
                        {
                        title: 'RT',
                        action: 'mdi-road-variant',
                        active: false,
                        items: [
                            { code: '01104l', title: 'Tramo', icon: 'mdi-road-variant' },
                            ],
                        },
                    ],
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
