import Topo from "../Tela1/Topo"
import Bottom from "../Tela2/Bottom"
import { useEffect,useState } from "react"
import axios from "axios"
import { Link,useParams } from "react-router-dom"
import styled from "styled-components"

export default function Tela3() {
    const { IdSessao } = useParams()
    console.log(IdSessao , "IDSESSAO")
    const [assentos, setAssentos] = useState([])
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${IdSessao}/seats`,seats)
    
        promise.then(resposta => {
            setAssentos(resposta)
        })
    
        promise.catch(erro => {
            console.log('ERRO')
        })
        console.log(assentos)
      },[])


    return(
        <>
            <Topo/>
            <Container>
                <h1>Selecione o(s) assentos</h1>
            </Container>
            <Bottom/>
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