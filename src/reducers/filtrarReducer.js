import { types } from "../types/types";


const initialState ={
    pagina:1,
    ordenColumna:"",
    orden:true,
    filtroColumna:"",
    filtro:""
}

export const filtrarReducer =(state=initialState,action)=>{

    switch (action.type) {
        case types.filtrar:           
        return {
            ...state,
            ...action.payload
            }
    
        default:
            return state;
    }
}