import React from "react";
import PropTypes  from "prop-types"

import { Paginacion } from "../../atoms/paginacion/Paginacion";
import { TableGenerica } from "../../atoms/table/TableGenerica";
import { MBuscar } from "../buscar/MBuscar";



export const MTabla =React.memo(({columnas,filas,actual,total,colFiltro})=>{


    return (

           <>
            
              { total>=0 && (<MBuscar columnas={colFiltro}/>)}
             <div className="content-tablaGenica">
              <TableGenerica  columnas={columnas} filas={filas}  />
             </div>      
             { total>=0 && (<Paginacion actual={actual} total={total}/>)}
           
           </>
    );
 
})

MTabla.propTypes={
  columnas:PropTypes.array.isRequired,
  filas:PropTypes.array.isRequired,
  actual:PropTypes.number.isRequired,
  total:PropTypes.number.isRequired
}