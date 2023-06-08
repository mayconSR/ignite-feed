import { useState } from 'react'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'


export function Comment({content, onDeleteComment}) {
  const [likes, setLikes] = useState(0);
  const handleDeleteComment = () => {
    onDeleteComment(content)
  }
  const handleLikeComment = () => {
    setLikes((state) => {
      return state + 1;
    })
  }
  return(
    <div className={styles.comment}>
      <Avatar src='https://github.com/mayconSR.png' hasBorder={false}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maycon Silva</strong>
              <time title='30 de maio às 20:52' dateTime='2023-05-30 20:52'>cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='deletar comentario'><Trash size={24}/></button>
          </header>
          <p>{content}</p> {/* Conteudo do comentario */}
        </div>
        <footer>
          <button title='aplaudir comentario' onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir
            <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}