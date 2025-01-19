import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

export function ReposList ({nomeDoUsuario}) {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  const[erro, setErro] = useState('')

  useEffect(() => {
    setRepos([]) //Limpa estados quando mudar de usuário
    setErro('')
    setEstaCarregando(true)
    fetch(`https://api.github.com/users/${nomeDoUsuario}/repos`)
    .then(res => {
      if(!res.ok) {
        throw new Error ('Usuário não encontrado.')
      }
      return res.json()
    })
    .then(resJson => {
      setTimeout(() => {
        setEstaCarregando(false);
        setRepos(resJson);
      }, 3000)
    })
    .catch(err => {
      setEstaCarregando(false)
      setErro(err.message)
    })
  }, [nomeDoUsuario]);

  return (

    <div className="container">
      {estaCarregando ? (
        <h1 className={styles.carregandoMessage}>Carregando...</h1>
      ) : erro ? (
          <div className={styles.erroMessage}>
            <h1>{erro}</h1>
            <p>Por favor, verifique o nome do usuário e tente novamente.</p>
          </div>
        ) : (
        <ul className={styles.list}>
          {repos.map(repositorio => (
            <li key={repositorio.id} className={styles.listItem}>
              <div className={styles.itemName}>
                <b>Nome:</b> {repositorio.name}
              </div>
              <div className={styles.itemLanguage}>
                <b >Linguagem:</b> {repositorio.language}
              </div>
              <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no github</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

