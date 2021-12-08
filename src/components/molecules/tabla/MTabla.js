import React from "react";
import { Paginacion } from "../../atoms/paginacion/Paginacion";
import { TableGenerica } from "../../atoms/table/TableGenerica";
import { Buscar } from "../../atoms/textbox/Buscar";


export const MTabla =({columnas,filas,actual,total})=>{

    /*const columnas =[

        {
          mostrar:false,
          nombre:"id"
        },
        
        {
          mostrar:true,
          nombre:"Nombre"
        },
        
        {
          mostrar:true,
          nombre:"Fecha"
        }
      ]
      const filas =[
        {
          id: "1",
          nombre: "Componentes",
          fecha: "2021-11-29T13:34:43.277"
         },
         {
          id: "2",
          nombre: "Procesadores",
          fecha: "2021-11-29T13:34:43.28"
        }
    ]*/
        
    return (

           <div>
             <Buscar/>
             <TableGenerica  columnas={columnas} filas={filas}  />
             <Paginacion actual={actual} total={total}/>
           </div>
    );
 
}