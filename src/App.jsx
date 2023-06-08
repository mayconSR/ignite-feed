import { Post } from "./components/Post"
import "./global.css"
import { Header } from "./components/Header"
import styles from "./App.module.css"
import { Sidebar } from "./components/sidebar"


// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author:
    {
      avatarUrl: "https://github.com/mayconSR.png",
      name: "Maycon Silva Rodrigues",
      role: "Developer front-end" 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare', href: '#' },
      { 
        type: 'hashtags', 
        content: [ 
          { tag: 'novoprojeto', href: '#' },
          { tag: 'nlw', href: '#' },
          { tag: 'rocketseat', href: '#' }
        ] 
      }
    ],
    publishedAt: new Date('2023-05-30 20:52:00')
  },
  {
    id: 1,
    author:
    {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Britto",
      role: "Educator @Rocketseat" 
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare', href: '#' },
      { 
        type: 'hashtags', 
        content: [ 
          { tag: 'novoprojeto', href: '#' },
          { tag: 'nlw', href: '#' },
          { tag: 'rocketseat', href: '#' }
        ] 
      }
    ],
    publishedAt: new Date('2023-05-28 18:33:35')
  }
]

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>{/* iteração */}
          {posts.map(post => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content} 
              publishedAt={post.publishedAt} 
            />
            ))}
        </main>
      </div>
    </>
  )
}

export default App
