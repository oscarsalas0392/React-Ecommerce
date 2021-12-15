import { ProductoAll } from "../../../actions/producto";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { startLogin } from "../../../actions/auth";
import { MTabla } from "../../molecules/tabla/MTabla";

export const ListProducto =()=>{

    const dispatch = useDispatch();
    dispatch(startLogin("root@hotmail.com","root123"))//pruebas
    const filtro = useSelector( state => state.filtro );
  

    useEffect(() => {
        dispatch(ProductoAll(filtro));
    }, [filtro])

    const producto= useSelector( state => state.producto );
  
    const columnas =
    [
        {mostrar:false,nombre:"id"},       
        {mostrar:true,nombre:"nombre"},   
        {mostrar:true,nombre:"descripcion"},
        {mostrar:true,nombre:"precio"},
        {mostrar:false,nombre:"descuento"},
        {mostrar:false,nombre:"categoria1Des"},
        {mostrar:false,nombre:"categoria2Des"},
        {mostrar:false,nombre:"categoria3Des"},
        {mostrar:false,nombre:"categoria4Des"},
        {mostrar:false,nombre:"categoria5Des"},
        {mostrar:false,nombre:"categoria1"},
        {mostrar:false,nombre:"categoria2"},
        {mostrar:false,nombre:"categoria3"},
        {mostrar:false,nombre:"categoria4"},
        {mostrar:false,nombre:"categoria5"},
        {mostrar:false,nombre:"imagen"},
        {mostrar:false,nombre:"fecha"},
        {mostrar:true,nombre:"cantidad"},
    ]
    if(producto.list !=null)
    { 
      return(
                     <MTabla columnas={columnas} 
                      filas={producto.list}
                      actual={producto.paginaActual}
                      total={producto.paginas}
                      />
        )
    }
    else{

      return (<></>)
    }


}