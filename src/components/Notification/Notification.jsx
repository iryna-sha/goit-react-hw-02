import s from './Notification.module.css';

export function Notification({message}) {
  return (
    <section className={s.decor}>
      <p >{message}</p>
    </section>
  );
}
