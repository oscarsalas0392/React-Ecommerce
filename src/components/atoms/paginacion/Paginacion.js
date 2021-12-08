import React, {  useState } from "react"



export const Paginacion =({actual,total})=>{

    const [pagAct, setPagAct] = useState(actual);
    let count=0;

    const handleOnclick=({target})=>{

       let numero = parseInt(target.textContent);
       setPagAct(numero);
       count=0;
    }

    const handleOnclickBack=()=>{
        count=0;
        if(pagAct>1)
        {
            setPagAct(x=>x-1);
        }
     }

     const handleOnclickNext=()=>{
        count=0;
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

        content.push(<span key="<" className="pagina" onClick={handleOnclickBack}>{"<"}</span>);
         
        let pag = pagAct+4 > total ?  total-4 :pagAct;

        if(pagAct+4 >=total &&  total>5)
        {
            content.push(<span key="init">...</span>)
        }

        for(let i=pag;i<=total;i++)
        {            
            if(count==maximo && pagAct+4 <total){break};
             classPag = i==pagAct ? "pagina seleccionada" : "pagina";
             content.push(<span key={i}  className={classPag} onClick={handleOnclick}>{i}</span>);
             count++;          
        }

        if(pagAct+4<total)
        {
            content.push(<span key="finish" >...</span>)
        }

        content.push(<span key=">"  className="pagina" onClick={handleOnclickNext}>{">"}</span>);
        return content;
    }

    return(

        <div className="content-paginacion">{getPage()}</div>
    )
}