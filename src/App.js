import { useState } from "react";
import Card from "./components/Card/Card";



function App() {

  const [ textos, setTextos ] = useState([
    "Este é un texto",
    "Este é outro texto",
    "Este é o último texto"
  ])

  function nuevoSetterDeParaTexto (indiceTexto) {
    // Patrón factory. Proporciona una función para actualizar
    // un texto específico en el array del state "textos".
    return (nuevoTexto)=>{
      const copiaTextos = [...textos]
      copiaTextos[indiceTexto] = nuevoTexto
      setTextos(copiaTextos)
    }
  } 

  return (
    <>
    <Card contenido={textos[0]} setContenido={nuevoSetterDeParaTexto(0)} editable={true}/>
    <Card contenido={textos[1]} setContenido={nuevoSetterDeParaTexto(1)} />
    <Card contenido={textos[2]}  setContenido={nuevoSetterDeParaTexto(1)} editable={false}/>
    </>
  );
}

export default App;
