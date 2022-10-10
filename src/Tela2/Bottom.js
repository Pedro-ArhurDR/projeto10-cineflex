import styled from "styled-components"

export default function Bottom({imagem, setImagem,nome,hora,setHora,dia}) {
    return(
        <>
        <BarraInf>
            <img data-identifier="movie-img-preview" src={imagem}/>
            <div >
            <h2 data-identifier="movie-and-session-infos-preview">{nome}</h2> 
            <h2 data-identifier="movie-and-session-infos-preview">{dia} - {hora}</h2>
            </div>
        </BarraInf>
        </>
    )
}

const BarraInf = styled.div`
        margin-top:15px;
       background-color:#9EADBA; 
       bottom:0;
       display: flex;
       left:0;
       height:20vh;
       width:100%;
       display:flex;
       align-items: center;
       h2{
        font-size: 20px;
        margin-left:15px;
       }
       p{
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