const baseUrl= "https://localhost:7230/api";

export const fetchSinToken=(endpoint,data,method="GET")=>{

   const url=`${baseUrl}/${endpoint}`;
   
   if(method==="GET")
   {
       const params=`?email=${data[0]}&password=${data[1]}`    
       return fetch(url+params);
   }
   else{
         const options=
         {
             method,
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(data)
         }
         return fetch(url,options);
   }
}


export const fetchConToken=(endpoint,data,method="GET",PorId=false)=>{

    const url=`${baseUrl}/${endpoint}`;
    
    if(method.includes("GET"))
    {
        let params='';
        if(PorId===false)
        {
     
            params=`/${data[0]}?columnaOrden=${data[1]}&ascendente=${data[2]}&columnaFiltro=${data[3]}&filtro=${data[4]}`
             return fetch(url+params,{
                method,
                headers:{
                   'Content-Type':'application/json',
                  'x-token':localStorage.getItem('token')  || ''
                }
              });
        }
        else
        {
             params=`?id=${data[0]}`        
        }

        return fetch(url+params,{
            method,
            headers:{
               'Content-Type':'application/json',    
              'x-token':localStorage.getItem('token')  || ''
            }
          });
    }
    else{
          const options={
              method,
              headers:{
                  'Content-Type':'application/json',
                  'x-token':localStorage.getItem('token')  || ''
              },
              body:JSON.stringify(data)
          }
 
          return fetch(url,options);
    }
 }