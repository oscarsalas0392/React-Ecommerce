import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";



export const ProductoAll =(filtro)=>{

   return async(dispatch)=>{

    const resp= await fetchConToken('Producto/All',Object.values(filtro),'GET');
    const body = await resp.json();

        if(body.state)
        {
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(Productos(body.result));
        }
        else
        {
            Swal.fire('Error',body.message,'error');
        }

   }

}

const Productos =(data)=>({
  
    type:types.productoGet,
    payload:data
});