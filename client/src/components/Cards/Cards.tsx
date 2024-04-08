import { useGetCardsQuery } from '@services/cards/cards'
import s from './Cards.module.css'
import { Card } from '@components/Card'

export const Cards = () => {
  const { data } = useGetCardsQuery(null)

  return (
    <div className={s.cards}>
      {data?.data?.map((card) => (
        <Card key={card._id} {...card} />
      ))}
    </div>
  )
}
