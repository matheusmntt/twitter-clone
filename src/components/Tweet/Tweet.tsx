import React from 'react'

import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import s from './Tweet.module.css'

interface ITweetProps {
  name: string
  username: string
  userImg: string
  children: React.ReactNode
}

export const Tweet = ({ name, username, children, userImg }: ITweetProps) => {
  return (
    <a href="#" className={s.tweet}>
      <img src={userImg} alt="Matheus Monteiro" />

      <div className={s.tweetContent}>
        <div className={s.tweetContentHeader}>
          <strong>{name}</strong>
          <span>{username}</span>
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
    </a>
  )
}
