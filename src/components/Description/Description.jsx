import s from './Description.module.css';

export function Description({ name, paragraph }) {
  return (
    <div className={s.decor}>
      <h2>{name}</h2>
      <p>{paragraph}</p>
    </div>
  );
}
