
import { useState } from 'react'
import Perfil from './components/Perfil/index.jsx'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList/index.jsx'

function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeDoUsuario, setNomeDoUsuario] = useState('')
  return (
    <>
      <input type="text" onBlur={(e) => setNomeDoUsuario(e.target.value)} />
      
      {nomeDoUsuario.length > 4 && (
        <>
          <Perfil nomeDoUsuario = {nomeDoUsuario}/>
          <ReposList nomeDoUsuario = {nomeDoUsuario}/>
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}
      
      <button type="button" onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button> */}
    </>
  )
}

export default App
