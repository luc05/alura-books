import styled from "styled-components"

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.corDoTexto || "#000"};
    font-size: ${props => props.tamanhoFonte || "16px"};
    text-align: center;
    margin: 0;
`