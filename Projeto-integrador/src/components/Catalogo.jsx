export function Catalogo({musica}){
    return(
        <>
            <main className="mainSection">
                <p className="AlbumDaVez">Álbum da vez!</p>
                <h2 className="catalogoFaixas">CATÁLOGO DE FAIXAS!</h2>
                <p className="subtituloCatalogo">3 faixas cadastradas</p> {/* lembrar como eu posso adicionar estes dados do banco */}
            </main>

            <section className="itemCatalogo">
                {/* aqui somente mostra o valor */}
                <h3 className="nomeCatalogo">{musica.nome}</h3>
                <h2 className="albumCatalogo">{musica.album}</h2>
                <h3 className="generoCatalogo">{musica.genero}</h3>
            </section>
        </>
    )
}