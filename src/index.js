import React from "react";
import ReactDOM from "react-dom";
import HelloWord from "./components/HelloWord";

//NOTA: Render recibe dos parametros, 1) componente y 2) donde voy a empujar el componente
ReactDOM.render(<HelloWord />, document.getElementById("app"));
