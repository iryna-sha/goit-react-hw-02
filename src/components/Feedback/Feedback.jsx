import s from './Feedback.module.css';
export function Feedback({
  totalFeedback,
  goodFeedback,
  feedBack: { good, neutral, bad },
}) {
  return (
    <>
      <ul className={s.decor}>
        <li>good:{good}</li>
        <li>neutral:{neutral}</li>
        <li>bad:{bad}</li>
        <li>totalFeedback:{totalFeedback}</li>
        <li>positive:{goodFeedback}%</li>
      </ul>
    </>
  );
}
