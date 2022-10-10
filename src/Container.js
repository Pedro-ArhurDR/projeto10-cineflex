import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from "./Tela1/Tela1"
import Tela2 from "./Tela2/Tela2";
import Tela3 from "./Tela3/Tela3";

import { useState } from "react";
import Tela4 from "./Tela4/Tela4";
export default function Container(){
    const [imagem,setImagem] = useState()
    const [nome,setNome] = useState("")
    const [data,setData] = useState([
        {
            dia:"",
            hora:""
        }
    ])
    const [date,setDate] = useState()
    const [dia,setDia] = useState("")
    const [hora,setHora] = useState("")
    const [comprador,setComprador] = useState("")
    const [cpf, setCpf] = useState("")
    const [reservas,setReservas] = useState([])
    const [poltronas,setPoltronas]= useState([])

    const dados={
        ids:[...reservas],
        name:comprador,
        cpf:cpf
    }
    console.log(poltronas)
    return( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Tela1 nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem}/>}/>

        <Route path="/sessoes/:IdFilme" element={<Tela2 hora={hora} setHora={setHora} dia={dia} setDia={setDia} 
        data={data} setDate={setDate} nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem} />}/>

        <Route path="/assentos/:IdSessao" element={<Tela3 dados={dados} poltronas={poltronas} setPoltronas={setPoltronas} setReservas={setReservas} reservas={reservas}
        hora={hora} setHora={setHora} cpf={cpf} setCpf={setCpf} comprador={comprador} setComprador={setComprador}
        dia={dia} nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem}/>} />

        <Route path="/sucesso" element={<Tela4 date={date} hora={hora} poltronas={poltronas} nome={nome} dados={dados}/>}/>

    </Routes>    
    </BrowserRouter>
    )
}