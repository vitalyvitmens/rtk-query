import { FC } from "react";
import s from "./FullCard.module.css";
import { useParams } from "react-router-dom";
import { useGetCardByIdQuery } from "@services/cards";

export const FullCard: FC = ({}) => {
  const { id } = useParams();
  const { data: card } = useGetCardByIdQuery({ id });

  return (
    <div className={s.card}>
      {card ? (
        <>
          <img className={s.card__image} src={card.img} alt={card.title} />
          <h2 className={s.card__title}>{card.title}</h2>
          <p className={s.card__description}>{card.description}</p>
          <h3 className={s.card__heading_story}>История</h3>
          <p className={s.card__story}>{card.story}</p>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};
