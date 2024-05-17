export const classifyGroupBTN = {
    methods: {
        classifyGroupBTN(objetos){
            let itemsBTN = [
                {
                    group: 'Transportes',
                    icon: this.getGroupBtnIcon('01'),
                    values: []
                },
                {
                    group: 'Edificios y construcciones',
                    icon: this.getGroupBtnIcon('02'), 
                    values: []
                }, 
                {
                    group: 'Servicios e instalaciones',
                    icon: this.getGroupBtnIcon('03'), 
                    values: []
                }, 
                {
                    group: 'Hidrografía',
                    icon: this.getGroupBtnIcon('04'), 
                    values: []
                },
                {
                    group: 'Orografía y paisaje',
                    icon: this.getGroupBtnIcon('05'), 
                    values: []
                },  
                {
                    group: 'Zonas administrativas',
                    icon: this.getGroupBtnIcon('07'), 
                    values: []
                }, 
            ];

            
            // INDICE OBJETOS
            for (this.index in objetos){
                let newObject = {
                    code: this.btnObjects[this.index].codigo, 
                    title: this.btnObjects[this.index].nom_corto, 
                    active: {
                        esquema: 'BTN',
                        codigo: this.btnObjects[this.index].codigo,
                    }
                }
                itemsBTN[itemsBTN.map((item)=>item.group).indexOf(objetos[this.index].nombre_tema)].values.push(newObject)               
            }

            return itemsBTN;
            }
        }
    }  
