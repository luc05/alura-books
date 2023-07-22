import styled from "styled-components"
import {livros} from "./dadosLivrosUltimosLancamentos"
import { Titulo } from "../Titulo"
import CardRecomendacao from "../CardRecomendacao"
import imagemLivro from "../../imagens/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
function UltimosLancamentos (){
    return(
        <UltimosLancamentosContainer>
            <Titulo corDoTexto="#EB9B00" tamanhoFonte="46px">Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
            { livros.map( livro => (
                <img src={livro.src} alt="livro"></img>
            ))}
            </NovosLivrosContainer>
            <CardRecomendacao 
            titulo="Talvez você se interesse por ..."
            subTitulo="Angular 11"
            descricao="Construindo uma aplicação integrada com a plataforma Google."
            img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos