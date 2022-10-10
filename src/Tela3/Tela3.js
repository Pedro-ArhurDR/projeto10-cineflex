import Topo from "../Tela1/Topo"
import Bottom from "../Tela2/Bottom"
import { useEffect,useState } from "react"
import axios from "axios"
import { Link,useParams,useNavigate, Navigate } from "react-router-dom"
import styled from "styled-components"
import AssentosT3 from "./AssentosT3"
import Exemplo from "./Exemplo"

export default function Tela3({imagem, poltronas,setPoltronas,setImagem,nome,dia,hora,setHora,comprador,setComprador,cpf, setCpf,reservas,setReservas}) {
    const { IdSessao } = useParams()
    const [assentos, setAssentos] = useState([])
    const navigate = useNavigate()
    const Selecionado = "#1AAE9E"
    const Indisponível ="#C3CFD9"
    const Disponível = "#FBE192"
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${IdSessao}/seats`)
    
        promise.then(resposta => {
            setAssentos(resposta.data.seats)
        })
    
        promise.catch(erro => {
            console.log('ERRO')
        })

      },[])


      function enviarInfos(event){
        event.preventDefault();
        navigate('/sucesso')
      }

    return(
        <>
            <Topo/>
            <Container>
                <h1>Selecione o(s) assentos</h1>
                <Cadeiras>
                {assentos.map((e,i)=><AssentosT3 poltronas={poltronas} setPoltronas={setPoltronas} 
                setReservas={setReservas} reservas={reservas}
                    key={i} e={e} i={i} assentos={assentos} />)}
                </Cadeiras>
                <Exemplo/>
                <Inputs>
                <form onSubmit={enviarInfos}>
                 <h2>Nome do Comprador:</h2>
                 <input type='text' value={comprador} placeholder="Digite seu nome..." onChange={e => setComprador(e.target.value)} required></input>
                 <h2>CPF do Comprador:</h2>
                 <input type='text' value={cpf} placeholder="Digite seu CPF..." onChange={e => setCpf(e.target.value)} required></input>
                 <Reservar><button type="submit">Reservar Assentos</button></Reservar>
                </form>
                </Inputs>
            </Container>
            <Bottom nome={nome} hora={hora} setHora={setHora} dia={dia} imagem={imagem} setImagem={setImagem}/>
        </> 
    )
}

const Container = styled.div`
    h1{
        margin:20px ;
        font-size: 25px;
        display:flex;
        align-items:center;
        justify-content:center;
    }

    

`
const Reservar= styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:80px;

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
    }
`
const Inputs= styled.div`
    h2{
        font-size:18px;
        margin:10px;
    }
input{
        display:flex;
        justify-content:center;
        align-items:center;
        width:350px;
        height:50px;

        margin:10px;
    }

`
const Cadeiras = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    div{
        width:26px;
        height:26px;
        background-color:${props=>props.cor};
        border:1px solid #808F9D;
        border-radius:12px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:6px;
    }
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