export const classifyGroupRT = {
    methods: {
        classifyGroupRT(objetos){
            let itemsRT = [
                {
                    group: 'Red Viaria',
                    icon: this.getGroupRtIcon('11'),
                    values: []
                },
                {
                    group: 'Red Trans. Rail',
                    icon: this.getGroupRtIcon('12'), 
                    values: []
                }, 
                {
                    group: 'Red Trans. Marítimo',
                    icon: this.getGroupRtIcon('13'), 
                    values: []
                }, 
                {
                    group: 'Red Trans. Aereo',
                    icon: this.getGroupRtIcon('14'), 
                    values: []
                },
                {
                    group: 'Red Trans. Cable',
                    icon: this.getGroupRtIcon('15'), 
                    values: []
                },  
            ];
            

            for (this.index in objetos){
                let newObject = {
                    code: this.rtObjects[this.index].codigo, 
                    title: this.rtObjects[this.index].nom_corto, 
                    active: {
                        esquema: 'RT',
                        codigo: this.rtObjects[this.index].codigo,
                    }
                }

                if(objetos[this.index].codigo.slice(0,2) === '11'){
                    itemsRT[0].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '12'){
                    itemsRT[1].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '13'){
                    itemsRT[2].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '14'){
                    itemsRT[3].values.push(newObject)
                }
                else if (objetos[this.index].codigo.slice(0,2) === '15'){
                    itemsRT[4].values.push(newObject)
                }
                
            }
            
            return itemsRT;
            
            }
        }
    }  
