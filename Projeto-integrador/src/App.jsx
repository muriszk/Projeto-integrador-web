import { useState } from "react";

import { Menu } from './components/Menu';
import { Catalogo } from './components/Catalogo';
import { Cadastro } from './components/Cadastro';

export function App() {

  const [pagina, setPagina] = useState("catalogo");

  return (
    <>
      <Menu setPagina={setPagina} />

      {pagina === "catalogo" && (
        <Catalogo />
      )}

      {pagina === "cadastro" && (
        <Cadastro aoCadastrar={() => setPagina("catalogo")} />
      )}

    </>
  );
}

export default App;
