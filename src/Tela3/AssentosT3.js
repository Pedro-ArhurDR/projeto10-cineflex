import styled from "styled-components"
import { useState, useEffect } from "react"
export default function AssentosT3({e,assentos,i,clicarAssento,reservas,setReservas,poltronas,setPoltronas}) {
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
        console.log(botao)
        if(botao===true){
            if(!reservas.includes(e.id)){
                setReservas([...reservas,e.id])
            }
            if(!poltronas.includes(e.name)){
                setPoltronas([...poltronas,e.name])
            }
            setColor("#1AAE9E")
        }   
        else{
            alert("Esse assento não está disponível")
        }
        if(color==="#1AAE9E"){
            setColor("#FBE192")
            const index = reservas.indexOf(e.id)
            const novoarray= reservas.splice(index,1)
            const index2 = poltronas.indexOf(e.name)
            const novoarray2= poltronas.splice(index,1)
            console.log("RESERVAS ATUAIS",reservas)
            console.log("POLTRONAS ATUAIS",poltronas)
        }
        console.log(e)
       }

    return(
        <>
             <Botao data-identifier="seat" cor={color}
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