import { ProductoAll } from "../../../actions/producto";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { MTabla } from "../../molecules/tabla/MTabla";

export const ListProducto =()=>{

    const dispatch = useDispatch();
    const filtro = useSelector( state => state.filtro );
  

    useEffect(() => {
        dispatch(ProductoAll(filtro));
    }, [filtro,dispatch])

    const producto= useSelector( state => state.producto );
  
    const columnas =
    [
        {mostrar:false,nombre:"id",columna:""},       
        {mostrar:true,nombre:"nombre",columna:"Nombre"},   
        {mostrar:true,nombre:"descripcion",columna:"Descripción"},
        {mostrar:true,nombre:"precio",columna:"Precio"},
        {mostrar:false,nombre:"descuento",columna:""},
        {mostrar:false,nombre:"categoria1Des",columna:""},
        {mostrar:false,nombre:"categoria2Des",columna:""},
        {mostrar:false,nombre:"categoria3Des",columna:""},
        {mostrar:false,nombre:"categoria4Des",columna:""},
        {mostrar:false,nombre:"categoria5Des",columna:""},
        {mostrar:false,nombre:"categoria1",columna:""},
        {mostrar:false,nombre:"categoria2",columna:""},
        {mostrar:false,nombre:"categoria3",columna:""},
        {mostrar:false,nombre:"categoria4",columna:""},
        {mostrar:false,nombre:"categoria5",columna:""},
        {mostrar:false,nombre:"imagen",columna:""},
        {mostrar:false,nombre:"fecha",columna:""},
        {mostrar:true,nombre:"cantidad",columna:"Cantidad"},
    ]

    const colFiltro =
    [
        {value:"nombre",nombre:"Nombre"},
        {value:"descripcion",nombre:"Descripción"}
    ]

    if(producto.list !=null)
    { 
      return(
                     <MTabla columnas={columnas} 
                      filas={producto.list}
                      actual={producto.paginaActual}
                      total={producto.paginas}
                      colFiltro={colFiltro}
                      />
        )
    }
    else{

      return (<></>)
    }


}