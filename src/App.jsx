import { useState } from 'react'
import { Perfil } from './components/Perfil/Perfil.jsx'
import { ReposList } from './components/ReposList/ReposList.jsx'
import './global.css';
import styles from './App.module.css'

function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeDoUsuario, setNomeDoUsuario] = useState('')

  function handleSearch(event) {
    event.preventDefault()
    setNomeDoUsuario(event.target.inputSearch.value);
  }

  return (
    <>
      <div className={styles.searchArea}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="inputSearch"
            placeholder='Digite o nome do usuário'
            className={styles.searchInput}
            required
          />
          <button 
            type="submit"
            className={styles.searchButton}
          >Search</button>
          
        </form>
      </div>

      {nomeDoUsuario.length > 4 && (
        <>
          <Perfil nomeDoUsuario = {nomeDoUsuario}/>
          <ReposList nomeDoUsuario = {nomeDoUsuario}/>
        </>
      )}
    </>
  )
}

export default App
