import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";

import { Filtrar } from "../../../actions/filtro";
import { Buscar } from "../../atoms/textbox/Buscar"

export const MBuscar =({columnas})=>{
 
  
    const [value, setValue] = useState(columnas[0].value);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Filtrar({filtroColumna:value}));
    }, [value])

    const eventOnChange=({target})=>
    {
        setValue(target.value);
    }

    const lista=columnas.map((x,index)=>
    {  
        if(value==x.value)  return(<option key={x.value} defaultValue value={x.value}>{x.nombre}</option>);
        if(value!=x.value)  return(<option key={x.value} value={x.value}>{x.nombre}</option>);                  
     })

    return(

            <div className="content-Filtro">
                   <Buscar/>
                   <select className="cmbFiltro" id="cmbFiltro" onChange={eventOnChange}>
                    {lista}
                   </select>
            </div>
        )

}