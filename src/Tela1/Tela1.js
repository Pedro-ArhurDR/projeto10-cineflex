import styled from "styled-components"
import Topo from "./Topo"
import axios from "axios"
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';


export default function Tela1({setImagem,setNome}){
    const [filmes, setFilmes] = useState([])
  useEffect(()=>{
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/`)

    promise.then(resposta => {
        setFilmes(resposta.data)
    })

    promise.catch(erro => {
        console.log(erro)
    })
  },[])

  function infos(item){
    setImagem(item.posterURL) 
    setNome(item.title)

  }

    return (
    <>
    <Topo/>
    <Container>
        <h1>Selecione o filme</h1>
        <div>{filmes.map((item,i)=><Link key={i} to={`/sessoes/${item.id}`}><img data-identifier="movie-outdoor" onClick={()=>infos(item)} src={item.posterURL}/></Link>)}</div>
    </Container>
    </>
    )
}


const Container= styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;

    h1{
        margin-top:20px ;
        font-size: 25px;
    }
    img{
        width:129px;
        height:193px;
        margin:20px 20px;
        border: 8px solid white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    div{
        margin:20px 20px;
    }

`