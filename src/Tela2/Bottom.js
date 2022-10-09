import styled from "styled-components"
export default function Bottom({imagem, setImagem,nome,setNome}) {
    return(
        <>
        <BarraInf>
            <img src={imagem}/> <h2>{nome}</h2> 
        </BarraInf>
        </>
    )
}

const BarraInf = styled.div`
       background-color:#9EADBA; 
       position:absolute;
       bottom:0;
       display: flex;
       left:0;
       height:117px;
       width:100%;
       display:flex;
       align-items: center;
       h2{
        font-size: 26px;
        margin-left:15px;
       }
       img{
        width:64px;
        height:89px;
        border: 8px solid white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin-left:5px;
    }
`