import Topo from "../Tela1/Topo"
import Bottom from "../Tela2/Bottom"
import { useEffect,useState } from "react"
import axios from "axios"
import { Link,useParams } from "react-router-dom"
import styled from "styled-components"

export default function Tela2({imagem, setImagem,nome,setDate,dia,setDia,hora,setHora}) {
    const { IdFilme } = useParams();
    const [horarios,setHorarios] = useState([])
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${IdFilme}/showtimes`)
    
        promise.then(resposta => {
            setHorarios(resposta.data.days)
        })
    
        promise.catch(erro => {
            console.log('ERRO')
        })
      },[])

      function salvarData(h,hora){
        setDia(h.weekday)
        setDate(h.date)
        setHora(hora)
      }

    return (
        <>
            <Topo/>
            <Container>
            <h1>Selecione o horário</h1>
            {horarios.map((h,i)=><div data-identifier="session-date" key={i}>
                <h2>{h.weekday} - {h.date}</h2>
            <Horario>
            <Link to={`/assentos/${h.showtimes[0].id}`}><div data-identifier="hour-minute-btn" onClick={()=> salvarData(h,h.showtimes[0].name)}>{h.showtimes[0].name}</div></Link>
            <Link to={`/assentos/${h.showtimes[1].id}`}><div data-identifier="hour-minute-btn" onClick={()=> salvarData(h,h.showtimes[1].name)}>{h.showtimes[1].name}</div></Link>
            </Horario>
            </div>)}
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
    h2{
        font-size:20px;
        margin:15px 15px;
        text-decoration: none;
    }
    div{
        margin-left:10px;
    }
    
`

const Horario = styled.div`
    display:flex;
    div{
        background-color:#E8833A;
        width:83px;
        height:43px;
        display: flex;
        justify-content:center;
        align-items:center;
        font-size: 18px;
        color:white;
        text-decoration: none;
        border-radius:5px;
    }
`