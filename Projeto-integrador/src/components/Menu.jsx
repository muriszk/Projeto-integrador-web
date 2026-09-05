import styles from "./Menu.module.css";

export function Menu({ setPagina }) {

    return (
        <>
            <div className={styles.headerContainer}>

                <header className={styles.textHeader}>
                    <h2>CADASTRO E CATÁLOGO</h2>
                </header>

                <h3 className={styles.setContainer}>
                    <span className={styles.set}>SET</span>LIST
                </h3>

                <p className={styles.catalogoContainer}>
                    Catálogo de faixas de rock
                </p>

            </div>

            <div className={styles.buttonContainer}>

                <button
                    className={styles.buttonCatalogo} onClick={() => setPagina("catalogo")}> 01 CATÁLOGO
                </button>

                <button
                    className={styles.buttonCadastro} onClick={() => setPagina("cadastro")}> 02 CADASTRAR FAIXA
                </button>

            </div>
        </>
    );
}
