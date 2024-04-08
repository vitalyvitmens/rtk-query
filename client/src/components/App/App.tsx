import { Router } from "@/routes";
import s from './App.module.css';
import { Links } from "@components/Links";

export const App = () => {
  return (
    <div className={s.page}>
      <Links />
      <Router />
    </div>
  );
};
