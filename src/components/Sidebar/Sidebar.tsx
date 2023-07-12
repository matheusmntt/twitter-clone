import {
  Hash,
  House,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from 'phosphor-react'

import twitterLogo from '../../assets/logo.twitter.svg'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <img className={s.logo} src={twitterLogo} alt="Logo" />

      <nav className={s.mainNavigation}>
        <NavLink to="/">
          <House weight="fill" />
          <span>Home</span>
        </NavLink>
        <a href="">
          <Hash />
          <span>Explore</span>
        </a>
        <a href="">
          <Bell />
          <span>Notifications</span>
        </a>
        <a href="">
          <Envelope />
          <span>Messages</span>
        </a>
        <a href="">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </a>
        <a href="">
          <FileText />
          <span>Lists</span>
        </a>
        <a href="">
          <User />
          <span>Profile</span>
        </a>
        <a href="">
          <DotsThreeCircle />
          <span>More</span>
        </a>
      </nav>

      <button className={s.newTweet} type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  )
}
