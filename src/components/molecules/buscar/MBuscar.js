import React,{ useState } from "react";
import { useDispatch } from "react-redux";

import { Filtrar } from "../../../actions/filtro";
import { Buscar } from "../../atoms/textbox/Buscar"

export const MBuscar =React.memo(({columnas})=>{
 
  
    const [value, setValue] = useState(columnas[0].value);

    const dispatch = useDispatch();

    const eventOnChange=({target})=>
    {
        setValue(target.value);
        dispatch(Filtrar({filtroColumna:target.value}));
    }

    const lista=columnas.map((x,index)=>
    {  
        if(value===x.value)  {
            return(<option key={x.value} defaultValue value={x.value}>{x.nombre}</option>);
        }
        else
        {
             return(<option key={x.value} value={x.value}>{x.nombre}</option>); 
        }                 
     })

    return(

            <div className="content-Filtro">
                   <Buscar/>
                   <select className="cmbFiltro" id="cmbFiltro" onChange={eventOnChange}>
                    {lista}
                   </select>
            </div>
        )

})