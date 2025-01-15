import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

export default function ReposList ({nomeDoUsuario}) {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    setEstaCarregando(true)
    fetch(`https://api.github.com/users/${nomeDoUsuario}/repos`)
    .then(res => res.json())
    .then(resJson => {
      setTimeout(() => {
        setEstaCarregando(false);
        setRepos(resJson);
      }, 3000)
    })
  }, [nomeDoUsuario]);

  return (

    <div className="container">
      {estaCarregando ? (
        <h1>Carregando...</h1>
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

