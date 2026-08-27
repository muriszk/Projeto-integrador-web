import './App.css';
import { useState } from "react";
import { Menu } from './components/Menu';
import { Catalogo } from './components/Catalogo';

export function App() {

  const [pagina, setPagina] = useState("catalogo");

  return (
    <>
      <Menu setPagina={setPagina} />
      {/* aqui define o valor */}

      {pagina === "catalogo" && <Catalogo musica={{ // definição de um objeto
        nome: "back in blaaack", // estes valores posteriormente, vão ser capturados do banco de dados
        album: "Back in blacaak",
        genero: "Rock"
      }} />}

      {pagina === "cadastro" && <Cadastro />}
    </>
  );
}

export default App;