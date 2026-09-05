import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Catalogo.module.css";

const API_URL = "http://localhost:8181/musica";

export function Catalogo() {
    const [musicas, setMusicas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function buscarMusicas() {
            try {
                const resposta = await axios.get(API_URL);
                setMusicas(resposta.data);
            } catch {
                setErro("Não foi possível carregar o catálogo.");
            } finally {
                setCarregando(false);
            }
        }

        buscarMusicas();
    }, []);

    return(
        <>
            <main className={styles.mainSection}>
                <p className={styles.albumDaVez}>Álbum da vez!</p>
                <h2 className={styles.catalogoFaixas}>CATÁLOGO DE FAIXAS!</h2>
                <p className={styles.subtituloCatalogo}>{musicas.length} faixas cadastradas</p>
            </main>

            {carregando && <p>Carregando catálogo...</p>}
            {erro && <p>{erro}</p>}

            {!carregando && !erro && musicas.map((musica) => (
                <section className={styles.itemCatalogo} key={musica.id}>
                    <h3 className={styles.nomeCatalogo}>{musica.nome}</h3>
                    <h2 className={styles.albumCatalogo}>{musica.album}</h2>
                    <p>{musica.artista}</p>
                    <h3 className={styles.generoCatalogo}>{musica.genero}</h3>
                    <p>{musica.ano} · {musica.duracao}</p>
                    {musica.favorita && <p>★ Favorita</p>}
                </section>
            ))}
        </>
    )
}
