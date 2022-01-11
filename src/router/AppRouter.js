import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { Configuracion } from "../components/templates/configuracion/Configuracion";
import ProductAdd from "../components/templates/Add-Update/ProductAdd";


const AppRouter =()=>{

      return(
        <Router>
        <div>
          <Switch>

            <Route path="/Configuracion/prodAdd" component={ProductAdd}/>
            <Route path="/Configuracion" component={Configuracion}/>
          
          </Switch>
        </div>
      </Router>

      )
      
  }

  export default AppRouter;