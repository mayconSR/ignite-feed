import { Avatar } from './Avatar'
import styles from './sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src='https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=50' alt="Cover" />
      <div className={styles.profile}>
      <Avatar src='https://github.com/mayconSR.png'/>
        <strong>Maycon Silva</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#"><PencilLine size={20}/>Editar Seu Perfil</a>
      </footer>
    </aside>
  ) 
}