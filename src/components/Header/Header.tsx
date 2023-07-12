import { Sparkle } from 'phosphor-react'
import s from './Header.module.css'

interface IHeaderProps {
  title: string
}

export const Header = ({ title }: IHeaderProps) => {
  return (
    <div className={s.timelineHeader}>
      {title}
      <Sparkle />
    </div>
  )
}
