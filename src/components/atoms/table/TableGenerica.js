import React from "react";


export const TableGenerica = ({columnas,filas})=>{


    const clickFila=(e)=>
    {
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
                        {
                      
                          columnas.map(x=>(                           
                            <th className={x.mostrar?"head-row_data":"head-row_data invisible"}  key={x.nombre}>{x.nombre}</th>                       
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