import React, {  useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { Filtrar } from "../../../actions/filtro";

export const Paginacion =({actual,total})=>{

    const [pagAct, setPagAct] = useState(actual);
    const dispatch = useDispatch();
   

    useEffect(() => {
        dispatch(Filtrar({pagina:pagAct})); 
    }, [dispatch,pagAct])

    const handleOnclick=({target})=>{
       let numero = parseInt(target.textContent);
       setPagAct(numero);
    }

    const handleOnclickBack=()=>{

        if(pagAct>1)
        {
            setPagAct(x=>x-1);
        }
     }

     const handleOnclickNext=()=>{
       
        if(total > pagAct)
        {
            setPagAct(x=>x+1);
        }
     }

    const getPage = ()=>{

        let content=[];
        let maximo=5;
        let count=0;
        let classPag="";
        let classEnable="";
        let pag=1;
        let totalPaginas=1;

        if(pagAct - Math.trunc(maximo/2) > 0  && total>maximo)
        {             
            pag= total>=pagAct + Math.trunc(maximo/2) ? pagAct - Math.trunc(maximo/2) : total-(maximo-1);         
            totalPaginas= total>= pagAct + Math.trunc(maximo/2) ?  pagAct + Math.trunc(maximo/2) : total;
        }

        /*if( pagAct - Math.trunc(maximo/2) <= 0)
        {
            pag=1;
        } */

        if(total<=maximo)
        {
            totalPaginas=total;
        }

        classEnable =  totalPaginas > maximo ? classEnable="visible":"";
        content.push(<span key="<" className={`next ${classEnable}`} onClick={handleOnclickBack}>{"<"}</span>);

        for(let i=pag;i<=totalPaginas;i++)
        {            
            if(count===maximo && pagAct+4 <total){break};
             classPag = i===pagAct ? "pagina seleccionada" : "pagina";
             content.push(<span key={i}  className={classPag} onClick={handleOnclick}>{i}</span>);
             count++;          
        }

        classEnable =  totalPaginas < total ? classEnable="visible":"";
        content.push(<span key=">"  className={`back ${classEnable}`} onClick={handleOnclickNext}>{">"}</span>);
        return content;
    }

    return(
        <div  className="content-paginacion">
            <div className="paginacion">{getPage()}</div>
        </div>
      
    )
}