import React from 'react'

import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import s from './Tweet.module.css'

interface ITweetProps {
  children: React.ReactNode
}

export const Tweet = ({ children }: ITweetProps) => {
  return (
    <Link to="/status" className={s.tweet}>
      <img src="https://github.com/matheusmntt.png" alt="Matheus Monteiro" />

      <div className={s.tweetContent}>
        <div className={s.tweetContentHeader}>
          <strong>Matheus Monteiro</strong>
          <span>@matheusmnt</span>
        </div>

        {children}

        <div className={s.tweetContentFooter}>
          <button type="button">
            <ChatCircle /> 20
          </button>

          <button type="button">
            <ArrowsClockwise /> 20
          </button>

          <button type="button">
            <Heart /> 20
          </button>
        </div>
      </div>
    </Link>
  )
}
