import { types } from "../types/types";

const initialState={

    id: "1",
    nombre: "",
    descripcion: "",
    precio: 0,
    descuento: 0,
    categoria1Des: "",
    categoria2Des: "",
    categoria3Des: null,
    categoria4Des: null,
    categoria5Des: null,
    categoria1: 1,
    categoria2: 1,
    categoria3: null,
    categoria4: null,
    categoria5: null,
    imagen: "",
    fecha: "",
    cantidad: 0

}

export const productoReducer =(state=initialState,action)=>{

    switch (action.type) {
        case types.productoGet:
         return action.payload;
        default:
            return state;
    }

}