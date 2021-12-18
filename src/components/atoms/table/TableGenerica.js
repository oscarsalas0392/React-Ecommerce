import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Filtrar } from "../../../actions/filtro";


export const TableGenerica = ({columnas,filas})=>{


    const [columnaOrden, setColumnaOrden] = useState("id");
    const [orden, setOrden] = useState(true);
    const [colOrdenAnt, setColOrdenAnt] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Filtrar({ordenColumna:columnaOrden,orden:orden}))
    }, [columnaOrden,orden])

    const clickFila=(e)=>
    {
        let colletion =e.target.parentNode.parentNode.children;
        let array = Array.from(colletion);

        array.forEach(element => {
            element.classList.remove("seleccionar");
        });
       
       e.target.parentNode.classList.add("seleccionar");
    }

    const clickCeldaTitulo =({target})=>
    {
        const id = target.id;
        colOrdenAnt != id ? setOrden(true) : setOrden(!orden); 
        if(id) setColumnaOrden(id);  
        
        colOrdenAnt != id && setColOrdenAnt(target.id)   
    }

    return (
             <table className="tableGen">
                 <thead className="tableGen-head">
                     <tr className="head-row">                       
                        {
                      
                          columnas.map(x=>(                           
                            <th onClick={clickCeldaTitulo} className={x.mostrar?"head-row_data":"head-row_data invisible"}  
                                key={x.nombre}
                                id={x.nombre}
                                >{x.columna}</th>                       
                        ))}
                     </tr>
                 </thead>

                 <tbody className="tableGen-body">
                     {filas.map((fila,index)=>( 

                            <tr className="body-row " key={index} onClick={clickFila}>
                                 {Object.keys(fila).map((dato,index)=>(
                                        <td  className={columnas[index].mostrar ? "body-row_data" : "body-row_data invisible"} key={index}>{fila[dato]}</td>
                                 ))}                                                           
                            </tr>
                     ))}                     
                 </tbody>
             </table>
    )

}