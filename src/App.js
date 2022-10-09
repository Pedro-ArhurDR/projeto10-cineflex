import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tela1 from "./Tela1/Tela1"
import Tela2 from "./Tela2/Tela2";
import Tela3 from "./Tela3/Tela3";
import { useState } from "react";
export default function App(){
    const [imagem,setImagem] = useState()
    const [nome,setNome] = useState("")
    const [data,setData] = useState([
        {
            dia:"",
            hora:""
        }
    ])
    console.log("DATA",data)
    console.log('imagem', imagem)
    console.log('nome', nome)
    return( 
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Tela1 nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem}/>}/>
        <Route path="/sessoes/:IdFilme" element={<Tela2 nome={nome} setNome={setNome} imagem={imagem} setImagem={setImagem} />}/>
        <Route path="/assentos/:IdSessao" element={<Tela3/>}/>
    </Routes>    
    </BrowserRouter>
    )
}