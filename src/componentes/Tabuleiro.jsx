import styled from "styled-components";

const CasaTabuleiro = styled.div`
    background-color: blue;
`

export default function Tabuleiro(){
    try {
        const linhas = ["1", "2", "3", "4", "5", "6", "7", "8"];
        const colunas = ["a", "b", "c", "d", "e", "f", "g", "h"];
        return (
            linhas.map( linha => {
                return colunas.map( coluna => {
                    return <CasaTabuleiro>{linha},{coluna}</CasaTabuleiro>
                })
            })
        )
    } catch (e) {
        console.log(e.message);
        return <></>
    }
}