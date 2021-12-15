import { useDispatch } from "react-redux";

import { Filtrar } from "../../../actions/filtro";
import { Buscar } from "../../atoms/textbox/Buscar"

export const MBuscar =({columnas})=>{
 
    const [value, setValue] = useState(columnas[0].value);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Filtrar({filtroColumna:value}))
    }, [value])

    const eventOnChange=({target})=>
    {
        setValue(target.value);
    }

    return(

            <div>
                   <Buscar/>
                   <select className="cmbFiltro" id="cmbFiltro" onChange={eventOnChange}>
                       {(columnas.map((x,index)=>{   
                            value==x.value && <option key={x.value} selected value={x.value}>{x.Nombre}</option>  
                            value!=x.value && <option key={x.value} value={x.value}>{x.Nombre}</option>                  
                       }))}
                   </select>
            </div>
        )

}