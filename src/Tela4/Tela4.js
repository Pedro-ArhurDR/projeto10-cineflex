import Topo from "../Tela1/Topo"
import styled from "styled-components"
import { Link } from "react-router-dom"
export default function Tela4({dados,nome,date,hora,poltronas}) {
    return (
        <>
        <Topo/>
        <Container>
        <h1>Pedido feito com sucesso!</h1>
        <Filme>
            <h2>Filme e sessão</h2>
            <p data-identifier="movie-session-infos-reserve-finished">{nome}</p> 
            <p data-identifier="movie-session-infos-reserve-finished">{date} - {hora}</p>
        </Filme>
        <Ingressos>
            <h2>Ingressos</h2>
            {poltronas.map((e,i )=> <p data-identifier="seat-infos-reserve-finished" key={i}> Assento {e}</p>)}
        </Ingressos>
        <Comprador>
        <h2>Comprador</h2>
        <p data-identifier="buyer-infos-reserve-finished">Nome: {dados.name}</p>
        <p data-identifier="buyer-infos-reserve-finished">CPF: {dados.cpf}</p>
        </Comprador>
        <Link data-identifier="back-to-home-btn" to="/"><button>Voltar pra Home</button></Link>
        </Container>
        </>
    )
}

const Container = styled.div`

        h1{
            color:#247A6B;
            font-weight: 700;
            font-size: 24px;
            margin:20px ;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        h2{
            font-size:24px;
            font-weight:700;
            margin:10px 0;
        }

        p{
            margin:5px auto;
            font-size:20px;
        }

        button{
    background-color:#E8833A;
    color:#FFFFFF;
    font-size: 18px;
    width:225px;
    height:42px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    margin:0 auto;
    }
`

const Filme = styled.div`
    margin-left: 25px;
    margin-bottom:30px;
    
`
const Ingressos= styled.div`
    margin-left: 25px;
    margin-bottom:30px;
`
const Comprador = styled.div`
    margin-left: 25px;
    margin-bottom:30px;
`