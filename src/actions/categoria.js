
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"


export const CategoriasAll=(filtro)=>
{

      return async(dispatch)=>
      {
            const resp= await fetchConToken("Category/All",Object.values(filtro),"GET");
            const body = await resp.json();
            
            if(body.state)
            {
                const {result} = body;
                localStorage.setItem('token',body.token);
                localStorage.setItem('token-init-date',new Date().getTime());
                dispatch(Categorias(result));
            }
            else{
                Swal.fire('Error',body.message,'error');
            }
      }
}

export const Categorias=(data)=>({
    type:types.categoriaGet,
    payload:data
});