import React from "react";


export const TableGenerica = ({columnas,filas})=>{


    const clickFila=(e)=>{

        let colletion =e.target.parentNode.parentNode.children;
        let array = Array.from(colletion);

        array.forEach(element => {
            element.classList.remove("seleccionar");
        });
       
       e.target.parentNode.classList.add("seleccionar");
    }

    return (
             <table className="tableGen">
                 <thead className="tableGen-head">
                     <tr className="head-row">                       
                        {columnas.map(x=>(
                            <th className="head-row_data"  key={x.nombre}>{x.nombre}</th>                       
                        ))}
                     </tr>
                 </thead>

                 <tbody className="tableGen-body">
                     {filas.map((fila,index)=>( 

                            <tr className="body-row " key={index} onClick={clickFila}>
                                 {Object.keys(fila).map(dato=>(
                                        <td className="body-row_data" key={fila[dato]}>{fila[dato]}</td>
                                 ))}                                                           
                            </tr>
                     ))}                     
                 </tbody>
             </table>
    )

}