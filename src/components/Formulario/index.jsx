import { useEffect } from "react";
import { useState } from "react"

// componente
const Formulario = () => {
  //useState
  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState('');

  useEffect(() => {
    console.log('Componente iniciado');

    return () => {
      console.log('Componente finalizado');
    }
  }, [])

  useEffect(() => {
    console.log('o nome foi alterado')
  }, [nome]);
  
  //função arrow function
  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if(media >= 7) {
      return (
        <p>Olá {nome}, você foi aprovado</p>
      )
    } else {
      return (
        <p>Olá {nome}, você foi reprovado</p>
      )
    }
  }
  //função tradicional
  function alterarMateriaB(evento) {
    setMateriaB(parseInt(evento.target.value));
  }
  //O que vai aparecer na página
  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map(item => (
          <li key= {item}>{item}</li>
        ))}
      </ul>

      <input type="text" placeholder="Seu nome" onChange={(evento) => setNome(evento.target.value)} />

      <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
      <input type="number" placeholder="Nota matéria B" onChange={alterarMateriaB}/>
      <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC (parseInt(evento.target.value))}/>
      {renderizaResultado()}
    </form>
  )
}
//exportar para o arquivo principal que é o App.jsx
export default Formulario