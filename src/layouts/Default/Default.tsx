import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/Sidebar'

import s from './Default.module.css'

export const Default = () => {
  return (
    <div className={s.layout}>
      <Sidebar />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  )
}
