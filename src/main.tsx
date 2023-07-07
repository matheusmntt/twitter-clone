import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Hash,
  House,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Sparkle,
} from 'phosphor-react'

import './global.css'

import twitterLogo from './assets/logo.twitter.svg'
import { Tweet } from './components/Tweet'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo" />

        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>

        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            Home
            <Sparkle />
          </div>

          <form action="" className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/matheusmntt.png" alt="UserAvatar" />
              <textarea id="tweet" placeholder="What's happening?"></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <Tweet
            name="Matheus Monteiro"
            username="@matheusmnt"
            userImg="https://github.com/matheusmntt.png"
          >
            <p>
              Acabei de migrar um projeto React GIGANTE de create-react-app para
              Vite e os resultados foram: <br /> <br /> ✅ npm start: De 32s
              para 400ms (sim, demorava 30s)
              <br /> ✅ npm build: De 120s para 22s <br /> <br /> Além disso,
              troquei do Yarn para o PNPM e o install das deps mudou de 24s para
              8s 🔥
            </p>
          </Tweet>

          <Tweet
            name="Lauren Neto"
            username="@lauuuuumnt"
            userImg="https://source.unsplash.com/random?b=1"
          >
            <p>Hoje eu só queria dormir</p>
          </Tweet>
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
