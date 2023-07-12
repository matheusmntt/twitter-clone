import { FormEvent, useState } from 'react'
import { Header } from '../../components/Header'
import { Separator } from '../../components/Separator'
import { Tweet } from '../../components/Tweet'

import s from './Status.module.css'
import { PaperPlaneRight } from 'phosphor-react'

export const Status = () => {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'Olha faz sentido',
    'Parabéns pelo progresso',
  ])

  const createNewAnswer = (event: FormEvent) => {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet>
        <p>Aprendendo muito sobre TailwindCSS</p>
      </Tweet>

      <Separator />

      <form onSubmit={createNewAnswer} className={s.answerTweetForm}>
        <label htmlFor="tweet">
          <img src="https://github.com/matheusmntt.png" alt="UserAvatar" />
          <textarea
            id="tweet"
            value={newAnswer}
            placeholder="Tweet your answer"
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          ></textarea>
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer}>
          <p>{answer}</p>
        </Tweet>
      ))}
    </main>
  )
}
