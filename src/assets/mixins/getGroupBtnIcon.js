export const getGroupBtnIcon = {
    methods: {
        getGroupBtnIcon(codigo){         
            //TRANSPORTES
            if(codigo.charAt(1) == 1){
                return 'mdi-road-variant'
            }
            //EDIFICIOS
            else if (codigo.charAt(1) == 2){
                return 'mdi-home-group'
            }
            //SERVICIOS E INSTALACIONES
            else if (codigo.charAt(1) == 3){
                return 'mdi-factory'
            }
            //HIDROGRAFIA
            else if (codigo.charAt(1) == 4){
                return 'mdi-waves'
            }
            //OROGRAFIA
            else if (codigo.charAt(1) == 5){
                return 'mdi-image-filter-hdr'
            }
            //ZONAS ADMIN
            else if (codigo.charAt(1) == 7){
                return 'mdi-pine-tree'
            }

            else {
                console.log("getGroupIcon error, no encontrado codigo ->", codigo)
            }
        }
    },
}

  