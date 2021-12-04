import { TableGenerica } from "./components/atoms/table/TableGenerica";

function EcommerceApp() {

  const columnas =[

    {
      mostar:false,
      nombre:"id"
    },
    
    {
      mostar:true,
      nombre:"Nombre"
    },
    
    {
      mostar:false,
      nombre:"Fecha"
    }
  ]
  const filas =[
    {
      id: "1",
      nombre: "Componentes",
      fecha: "2021-11-29T13:34:43.277"
     },
     {
      id: "2",
      nombre: "Procesadores",
      fecha: "2021-11-29T13:34:43.28"
    }
]

  return (
          <TableGenerica  columnas={columnas} filas={filas}  />
  );
}

export default EcommerceApp;
