import { Link } from 'react-router-dom'
import s from './Links.module.css'

export const Links = () => {
  return (
    <div className={s.root}>
      <Link to={'/'}>Карточки</Link>
      <Link to={'/form'}>Форма</Link>
    </div>
  )
}
