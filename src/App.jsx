import { useState, useEffect } from "react";
import "./App.css";

import { Description } from "./components/Description/Description";
import { Feedback } from "./components/Feedback/Feedback";
import { Options } from "./components/Options/Options";
import { Notification } from "./components/Notification/Notification";

export default function App() {
  const [clicked, setClicked] = useState({ good: 0, neutral: 0, bad: 0 });

  //*-------------------------------------------------------------------*//

  const name = "Sip Happens Café";
  const paragraph =
    "Please leave your feedback about our service by selecting one of the options below";
  const message = "Not feedback yet";
  //*-------------------------------------------------------------------*//
  const totalFeedback = clicked.bad + clicked.good + clicked.neutral;
  const goodFeedback = Math.round((clicked.good / totalFeedback) * 100);

  //*-------------------------------------------------------------------*//

  const valueOption = {
    good: "Good",
    neutral: "Neutral",
    bad: "Bad",
    reset: "Reset",
  };

  //*-------------------------------------------------------------------*//

  function handleOnClick(type) {
    setClicked((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  }

  function handleReset() {
    setClicked({ good: 0, neutral: 0, bad: 0 });
  }

  useEffect(() => {
    console.log("hey you", clicked);
  }, [clicked]);
  //*-------------------------------------------------------------------*//

  return (
    <section>
      <Description name={name} paragraph={paragraph} />
      <Options
        valueOption={valueOption}
        handleReset={handleReset}
        handleOnClick={handleOnClick}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedBack={clicked}
          valueOption={valueOption}
          totalFeedback={totalFeedback}
          goodFeedback={goodFeedback}
        />
      ) : (
        <Notification message={message} />
      )}
    </section>
  );
}
