export function Menu({ setPagina }) {

    return (
        <>
            <div className="headerContainer">

                <header className="textHeader">
                    <h2>CADASTRO E CATÁLOGO</h2>
                </header>

                <h3 className="setContainer">
                    <span className="set">SET</span>LIST
                </h3>

                <p className="catalogoContainer">
                    Catálogo de faixas de rock
                </p>

            </div>

            <div className="buttonContainer">

                <button
                    className="buttonCatalogo" onClick={() => setPagina("catalogo")}> 01 CATÁLOGO
                </button>

                <button
                    className="buttonCadastro" onClick={() => setPagina("cadastro")}> 02 CADASTRAR FAIXA
                </button>

            </div>
        </>
    );
}