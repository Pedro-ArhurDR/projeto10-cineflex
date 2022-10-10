import styled from "styled-components"
export default function Exemplo() {
    const Selecionado = "#1AAE9E"
    const Indisponível ="#C3CFD9"
    const Disponível = "#FBE192"
    return(
        <>
                 <Exemplos>
                    <div><Botao data-identifier="seat-selected-subtitle" cor={Selecionado} ></Botao>Selecionado</div>
                    <div><Botao data-identifier="seat-unavailable-subtitle" cor={Indisponível} ></Botao>Indisponível</div>
                    <div ><Botao data-identifier="seat-available-subtitle"cor={Disponível} ></Botao>Disponível</div>
                </Exemplos>
        </>
    )
}


const Botao = styled.div`
        width:26px;
        height:26px;
        background-color:${props=>props.cor};
        border:1px solid #808F9D;
        border-radius:12px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:6px;
`
const Exemplos = styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content: space-around;
        margin-top:10px;

        div{
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
        }
        
`