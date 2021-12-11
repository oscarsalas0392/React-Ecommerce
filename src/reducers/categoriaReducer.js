
import { types } from "../types/types";

const initialState = {
    id:1,
    nombre:"",
    fecha:""
}


export const categoriaReducer = (state=initialState,action)=>{

  switch (action.type) {
      case types.categoriaGet:
          return {
               ...action.payload            
          }        
      default:
        return state;
  }

}