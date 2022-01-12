import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

import { CategoriasAll } from "../../../actions/categoria";
import { MTabla } from "../../molecules/tabla/MTabla";


export const ListCategorias =()=>{

    const dispatch = useDispatch();
    const filtro = useSelector( state => state.filtro );
    const categoria= useSelector( state => state.categoria );

    useEffect(() => {
        dispatch(CategoriasAll(filtro));
    }, [filtro,dispatch])

    const columnas =
    [
        {mostrar:false,nombre:"id",columna:""},        
        {mostrar:true,nombre:"nombre",columna:"Nombre"},   
        {mostrar:true,nombre:"fecha",columna:"Fecha"}
    ]

    const colFiltro =
    [
        {value:"nombre",nombre:"Nombre"},
    ]


    if(categoria.list !=null)
    { 

      return(
                     <MTabla columnas={columnas} 
                      filas={categoria.list}
                      actual={categoria.paginaActual}
                      total={categoria.paginas}
                      colFiltro={colFiltro}
                      />
        )
    }
    else{

      return (<></>)
    }
}