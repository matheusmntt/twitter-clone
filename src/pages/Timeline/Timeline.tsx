import { FormEvent, useState } from 'react'
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'

import s from './Timeline.module.css'

export const Timeline = () => {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo!',
  ])

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form onSubmit={createNewTweet} className={s.newTweetForm}>
        <label htmlFor="tweet">
          <img src="https://github.com/matheusmntt.png" alt="UserAvatar" />
          <textarea
            id="tweet"
            value={newTweet}
            placeholder="What's happening?"
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          ></textarea>
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet) => (
        <Tweet key={tweet}>
          <p>{tweet}</p>
        </Tweet>
      ))}
    </main>
  )
}
