import { FC } from "react";
import s from "./Card.module.css";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description?: string;
  img?: string;
  _id?: string;
}

export const Card: FC<Props> = ({ title, description, img, _id }) => {
  return (
    <Link className={s.card} to={`/cards/${_id}`}>
      <img className={s.card__img} src={img} alt={title} />
      <p className={s.card__title}>{title}</p>
      <p className={s.card__description}>{description}</p>
    </Link>
  );
};
