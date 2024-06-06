export const classifyGroupBTN = {
    data(){
        return {
            itemsBTN: []
        }
    },

    methods: {
        createTheme(groupName, codigo){
            let newGroup = {
                    group: groupName,
                    icon: this.getGroupBtnIcon(codigo),
                    values: []
                }
            return newGroup
        },

        createObject(objeto){
            let newObject = {
                code: objeto.codigo, 
                title: objeto.nom_corto, 
                active: {
                    esquema: 'BTN',
                    codigo: objeto.codigo,
                }
            }
            return newObject
        },

        classifyGroupBTN(objetos){
            objetos.forEach((objeto)=>{
                if(this.itemsBTN.map((item)=>item.group).includes(objeto.nombre_tema)){
                    //SI TENEMOS EL TEMA INSERTAMOS OBJETO
                    this.itemsBTN[this.itemsBTN.map((item)=>item.group).indexOf(objeto.nombre_tema)].values.push(this.createObject(objeto))
                   
                } else {
                    //CREAMOS EL TEMA EN EL INDICE Y LUEGO INSERTAMOS
                    this.itemsBTN.push(this.createTheme(objeto.nombre_tema, objeto.codigo))
                    this.itemsBTN[this.itemsBTN.map((item)=>item.group).indexOf(objeto.nombre_tema)].values.push(this.createObject(objeto))
                }
            })

            return this.itemsBTN
            }
        }
    }  
