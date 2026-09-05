import { useState } from "react";
import axios from "axios";
import styles from "./Cadastro.module.css";

const API_URL = "http://localhost:8181/musica";

export function Cadastro({ aoCadastrar }) {

    const [musica, setMusica] = useState({
        nome: "",
        artista: "",
        album: "",
        genero: "",
        ano: "",
        duracao: "",
        favorita: false
    });
    const [erro, setErro] = useState("");

    function alterarMusica(event) {

        const nomeCampo = event.target.name;
        const valorCampo = event.target.value;

        setMusica({
            ...musica,
            [nomeCampo]: valorCampo
        });
    }

    async function cadastrarMusica(event) {

        event.preventDefault();

        try {
            await axios.post(API_URL, musica);
            setErro("");
            setMusica({
                nome: "",
                artista: "",
                album: "",
                genero: "",
                ano: "",
                duracao: "",
                favorita: false
            });
            aoCadastrar();
        } catch {
            setErro("Não foi possível cadastrar a faixa.");
        }
    }

    return (
        <main className={styles.cadastroContainer}>

            <section className={styles.cadastroHeader}>

                <p className={styles.fichaCadastro}>
                    FICHA DE INSCRIÇÃO
                </p>

                <h2>
                    CADASTRAR FAIXA
                </h2>

            </section>

            <form
                className={styles.formCadastro}
                onSubmit={cadastrarMusica}
            >

                {erro && <p>{erro}</p>}

                <div className={styles.campoCadastro}>

                    <label>
                        TÍTULO DA FAIXA *
                    </label>

                    <input
                        type="text"
                        name="nome"
                        placeholder="Ex: Paranoid"
                        value={musica.nome}
                        onChange={alterarMusica}
                    />

                </div>


                <div className={styles.campoCadastro}>

                    <label>
                        ARTISTA / BANDA *
                    </label>

                    <input
                        type="text"
                        name="artista"
                        placeholder="Ex: Black Sabbath"
                        value={musica.artista}
                        onChange={alterarMusica}
                    />

                </div>


                <div className={styles.campoCadastro}>

                    <label>
                        ÁLBUM
                    </label>

                    <input
                        type="text"
                        name="album"
                        placeholder="Ex: Paranoid"
                        value={musica.album}
                        onChange={alterarMusica}
                    />

                </div>


                <div className={styles.campoCadastro}>

                    <label>
                        SUBGÊNERO
                    </label>

                    <select
                        name="genero"
                        value={musica.genero}
                        onChange={alterarMusica}
                    >

                        <option value="">
                            Selecione um gênero
                        </option>

                        <option value="Classic Rock">
                            Classic Rock
                        </option>

                        <option value="Hard Rock">
                            Hard Rock
                        </option>

                        <option value="Heavy Metal">
                            Heavy Metal
                        </option>

                        <option value="Punk Rock">
                            Punk Rock
                        </option>

                        <option value="Grunge">
                            Grunge
                        </option>

                    </select>

                </div>


                <div className={styles.campoCadastro}>

                    <label>
                        ANO DE LANÇAMENTO *
                    </label>

                    <input
                        type="number"
                        name="ano"
                        placeholder="Ex: 1970"
                        value={musica.ano}
                        onChange={alterarMusica}
                    />

                </div>


                <div className={styles.campoCadastro}>

                    <label>
                        DURAÇÃO (MM:SS)
                    </label>

                    <input
                        type="text"
                        name="duracao"
                        placeholder="Ex: 2:48"
                        value={musica.duracao}
                        onChange={alterarMusica}
                    />

                </div>

                <div className={styles.campoFavorita}>

                    <input
                        type="checkbox"
                        name="favorita"
                        checked={musica.favorita}
                        onChange={(event) =>
                            setMusica({
                                ...musica,
                                favorita: event.target.checked
                            })
                        }
                    />

                    <label>
                        Marcar como faixa favorita
                    </label>

                </div>


                <button
                    className={styles.buttonCadastrar}
                    type="submit"
                >
                    CADASTRAR FAIXA
                </button>

            </form>

        </main>
    );
}
