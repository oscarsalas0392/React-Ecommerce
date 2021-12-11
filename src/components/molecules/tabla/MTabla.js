import React from "react";
import PropTypes  from "prop-types"

import { Paginacion } from "../../atoms/paginacion/Paginacion";
import { TableGenerica } from "../../atoms/table/TableGenerica";
import { Buscar } from "../../atoms/textbox/Buscar";



export const MTabla =({columnas,filas,actual,total})=>{


    return (

           <div>
            
             { total>=0 && (<Buscar/>)}
             <div className="content-tablaGenica">
              <TableGenerica  columnas={columnas} filas={filas}  />
             </div>      
             { total>=0 && (<Paginacion actual={actual} total={total}/>)}
             
           </div>
    );
 
}

MTabla.propTypes={
  columnas:PropTypes.array.isRequired,
  filas:PropTypes.array.isRequired,
  actual:PropTypes.number.isRequired,
  total:PropTypes.number.isRequired
}