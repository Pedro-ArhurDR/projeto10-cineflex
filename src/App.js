import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from "./Tela1/Tela1"
import Tela2 from "./Tela2/Tela2";
import Tela3 from "./Tela3/Tela3";

import { useState } from "react";
import Tela4 from "./Tela4/Tela4";
export default function App(){
    const [imagem,setImagem] = useState()
    const [nome,setNome] = useState("")
    const [data,setData] = useState([
        {
            dia:"",
            hora:""
        }
    ])
    const [dia,setDia] = useState("")
    const [hora,setHora] = useState("")
    const [comprador,setComprador] = useState("")
    const [cpf, setCpf] = useState("")
    const [reservas,setReservas] = useState([])
    console.log("RESERVAS",reservas)
    console.log(comprador)
    console.log(cpf)
    return( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Tela1 nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem}/>}/>

        <Route path="/sessoes/:IdFilme" element={<Tela2 hora={hora} setHora={setHora} dia={dia} setDia={setDia} 
        data={data} setData={setData} nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem} />}/>

        <Route path="/assentos/:IdSessao" element={<Tela3 setReservas={setReservas} reservas={reservas}
        hora={hora} setHora={setHora} cpf={cpf} setCpf={setCpf} comprador={comprador} setComprador={setComprador}
        dia={dia} nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem}/>} />

        <Route path="/sucesso" element={<Tela4/>}/>
    </Routes>    
    </BrowserRouter>
    )
}