import s from './Options.module.css';

export const Options = ({ 
  valueOption, 
  handleReset, 
  handleOnClick 
}) => {
  return (
    <ul className={s.decor}>
      <li>
        <button
          className={s.decorBTN}
          onClick={() => handleOnClick('good')}
          type="button"
        >
          {valueOption.good}
        </button>
      </li>
      <li>
        <button
          className={s.decorBTN}
          onClick={() => handleOnClick('neutral')}
          type="button"
        >
          {valueOption.neutral}
        </button>
      </li>
      <li>
        <button
          className={s.decorBTN}
          onClick={() => handleOnClick('bad')}
          type="button"
        >
          {valueOption.bad}
        </button>
      </li>
      <li>
        <button className={s.decorBTN} onClick={handleReset} type="button">
          {valueOption.reset}
        </button>
      </li>
    </ul>
  );
};
