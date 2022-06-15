export const getGroupRtIcon = {
    methods: {
        getGroupRtIcon(codigo){ 
            //RED VIARIA
            if(codigo.charAt(1) == 1){
                return 'mdi-road-variant'
            }
            //RED T.RAIL
            else if (codigo.charAt(1) == 2){
                return 'mdi-train'
            }
            //RED T.MARITIMO
            else if (codigo.charAt(1) == 3){
                return 'mdi-ferry'
            }
            //RED T.AEREO
            else if (codigo.charAt(1) == 4){
                return 'mdi-airplane-takeoff'
            }
            //RED T.CABLE
            else if (codigo.charAt(1) == 5){
                return 'mdi-gondola'
            }
            //TABLAS RELACION
            else {
                return 'mdi-table'
            }
        }
    },
}

  