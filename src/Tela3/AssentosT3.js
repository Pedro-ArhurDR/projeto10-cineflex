import styled from "styled-components"
import { useState, useEffect } from "react"
export default function AssentosT3({e,assentos,i,clicarAssento,reservas,setReservas}) {
    const[color,setColor] = useState("")
    
    useEffect(()=>{
        if(e.isAvailable===true){
            setColor("#FBE192")
        }
        if(e.isAvailable===false){
            setColor("#C3CFD9")
        }
      },[])

      function clicarAssento(botao){

        if(!reservas.includes(e.id)){
            setReservas([...reservas,e.id])
        }
      
        console.log(botao)
        if(botao===true){
            setColor("#1AAE9E")
        }   
        else{
            alert("Esse assento não está disponível")
        }
        if(color==="#1AAE9E"){
            setColor("#FBE192")
            const index = reservas.indexOf(e.id)
            const novoarray= reservas.splice(index,1)
            console.log("NOCO", novoarray)
            console.log("RESERVAS ATUAIS",reservas)
        }
        console.log(e)
       }

    return(
        <>
             <Botao cor={color}
                onClick={()=>clicarAssento(e.isAvailable)} key={i}>{e.name}</Botao>
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