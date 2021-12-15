import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { startLogin } from "../../../actions/auth";
import { CategoriasAll } from "../../../actions/categoria";
import { MTabla } from "../../molecules/tabla/MTabla";


export const ListCategorias =()=>{

    const dispatch = useDispatch();
    dispatch(startLogin("root@hotmail.com","root123"))//pruebas
    const filtro = useSelector( state => state.filtro );
  

    useEffect(() => {
        dispatch(CategoriasAll(filtro));
    }, [filtro])

    const categoria= useSelector( state => state.categoria );
  
    const columnas =[

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
    if(categoria.list !=null)
    { 
      console.log(categoria.paginaActual);
      return(
                     <MTabla columnas={columnas} 
                      filas={categoria.list}
                      actual={categoria.paginaActual}
                      total={categoria.paginas}
                      />
        )
    }
    else{

      return (<></>)
    }
}