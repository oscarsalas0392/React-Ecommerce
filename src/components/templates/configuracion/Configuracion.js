import { useState } from "react"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../../actions/auth";


import { typesConfig } from "../../../types/typesConfig"
import { ListCategorias } from "../../organisms/Categoria/ListCategorias"
import { ListProducto } from "../../organisms/Producto/ListProductos"


export const Configuracion = ()=>
{

    const dispatch = useDispatch();

    dispatch(startLogin("root@hotmail.com","root123"))//pruebas

   const [lista, setLista] = useState(typesConfig.producto);

   const HandleClick =(e)=>
   {
      e.preventDefault();
      const id =  e.target.id;
      setLista(id);  
   }

   const listaMostrar=()=>
   {
    switch (lista) {
        case typesConfig.categoria:
            return(<ListCategorias/>);

        case typesConfig.producto:
            return(<ListProducto/>);
        
            default: return (<></>);
    }
   }

   const listaTabs=
   [
       {id:typesConfig.compania, nombre:'Compañia'},
       {id:typesConfig.categoria, nombre:'Categorias'},
       {id:typesConfig.producto, nombre:'Productos'},
       {id:typesConfig.estadoMovimiento, nombre:'Estados de movimientos'},
       {id:typesConfig.grupoCategoria, nombre:'Grupo categorias'},
       {id:typesConfig.movimento, nombre:'Movimientos'},
       {id:typesConfig.pantalla, nombre:'Pantallas'},
       {id:typesConfig.permiso, nombre:'Permisos'},
       {id:typesConfig.tipoMovimiento, nombre:'Tipo Movimientos'},
       {id:typesConfig.tipoUsuario, nombre:'Tipo Usuarios'},
       {id:typesConfig.votacion, nombre:'Votaciónes'},
       {id:typesConfig.usuario, nombre:'Usuarios'},
   ]

   return (
            <div className="content-config">    

        
                    <div className="content-tabs">
                        {
                            listaTabs.map(x=>{
                            return (<Link  key={x.id} 
                                        className="tab" 
                                        id={x.id} 
                                        onClick={HandleClick}
                                        to="" >{x.nombre}</Link>)
                            })
                        }              
                    </div>


                    <div className="content-list">
                    <h2 className="title-tab">{listaTabs.find(x=>x.id===lista).nombre}</h2>
                            
                    <div className="content-table">
                        {listaMostrar()}
                        <Link className="link-reset button type1 black" to={`/Configuracion/${lista}Add`} >Agregar</Link>
                    </div>

                 
                   
                </div>           
            </div>
       
   )
}