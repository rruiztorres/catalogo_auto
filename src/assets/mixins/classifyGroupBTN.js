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
                    group: 'Zonas admin.',
                    icon: this.getGroupBtnIcon('07'), 
                    values: []
                }, 
            ];
            

            for (this.index in objetos){
                let newObject = {
                    code: this.btnObjects[this.index].codigo, 
                    title: this.btnObjects[this.index].nom_corto, 
                    active: {
                        esquema: 'BTN',
                        codigo: this.btnObjects[this.index].codigo,
                    }
                }

                if(objetos[this.index].codigo.slice(0,2) === '01'){
                    itemsBTN[0].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '02'){
                    itemsBTN[1].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '03'){
                    itemsBTN[2].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '04'){
                    itemsBTN[3].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '05'){
                    itemsBTN[4].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '07'){
                    itemsBTN[5].values.push(newObject)
                }
                
            }
            
            return itemsBTN;
            
            }
        }
    }  
