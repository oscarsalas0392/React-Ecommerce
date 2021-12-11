import Swal from "sweetalert2";
import { fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";


export const startLogin=(email,password)=>{

    return async(dispatch)=>
    {
        const resp = await fetchSinToken('auth',[email,password],'GET');
        const body = await resp.json();

        if(body.state)
        {
          
            let {result}= body;
            localStorage.setItem('token',body.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({
                            uid:result.cedula,
                            name:result.nombre
                        }))
        }
        else{
            Swal.fire('Error',body.message,'error');
        }
    }

}


const login=(user)=>({
    type:types.authLogin,
    payload:user
});