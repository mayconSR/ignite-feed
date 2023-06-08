import { format,formatDistanceToNow, set } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Post({author, content, publishedAt}) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})
  
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  
  const handleCreateNewComment = (e) => {
    e.preventDefault()
    setComments([...comments, commentText])
    setCommentText(''); // Limpa o campo de texto
  }

  const handleNewCommentText = (e) => {
    e.target.setCustomValidity('') // Limpa a mensagem de erro
    setCommentText(e.target.value)
  }

  const deleteComment = (comment) => {
    const commentsWithoutDeleteOne = comments.filter((item) => item !== comment)
    setComments(commentsWithoutDeleteOne)
  }
  const handleValidateComment = (e) => {
    e.target.setCustomValidity('Comente algo sobre esse post')
  }
  const isCommentEmpty = commentText.trim() === '';

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map((item, index) => {
          if(item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>
          }
          else if(item.type === 'link'){
            return <p><a key={index} href={item.href}>{item.content}</a></p>
          }
          else if(item.type === 'hashtags'){
            return<p>
              {item.content.map((hashtag, index) => (
                <a key={index} href={hashtag.href}>#{hashtag.tag} </a>
              ))}
            </p>
          }
        }
        )}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe um comentario</strong>
        <textarea 
          value={commentText}
          name='comment' 
          onChange={handleNewCommentText} 
          placeholder='Comente algo sobre esse post'
          onInvalid={handleValidateComment}
          required  
        >
        </textarea>
        <footer>
          <button type='submit' disabled={isCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment content={comment} key={comment} onDeleteComment={deleteComment}/>
        ))}
      </div>
    </article>
  )}