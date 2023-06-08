import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, ...props}) {
  return ( 
      <img 
        src={props.src} 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      />
  )
}