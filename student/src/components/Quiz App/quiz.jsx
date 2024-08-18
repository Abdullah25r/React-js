import React, { useRef, useState } from "react";
import "../css/quiz.css";
import { data } from "../../assets/data";
const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);
  let option_array = [option1, option2, option3, option4];
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("bg-success-subtle");
        setLock(true);
        setScore((prevScore) => {
          return prevScore + 1;
        });
      } else {
        e.target.classList.add("bg-danger-subtle");
        setLock(true);
        option_array[question.ans - 1].current.classList.add(
          "bg-success-subtle"
        );
      }
    }
  };
  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }

      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("bg-success-subtle");
        option.current.classList.remove("bg-danger-subtle");
        return null;
      });
    }
  };
  const reset = () => {
    setIndex(0);
    setQuestion(data[index]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <div className="card w-50 mx-auto">
      <h1 className="card-header fw-bold text-center m-1">Quiz App</h1>
      {result ? (
        <></>
      ) : (
        <>
          <div className="card-body">
            <h2 className="fw-semibold m-1">
              {index + 1}. {question.question}{" "}
            </h2>

            <ul className="list-unstyled">
              <li
                ref={option1}
                onClick={(e) => {
                  checkAns(e, 1);
                }}
                className="border rounded m-1 p-3 fs-5"
                role="button"
              >
                {question.option1}
              </li>
              <li
                ref={option2}
                onClick={(e) => {
                  checkAns(e, 2);
                }}
                className="border rounded m-1 p-3 fs-5"
                role="button"
              >
                {question.option2}
              </li>
              <li
                ref={option3}
                onClick={(e) => {
                  checkAns(e, 3);
                }}
                className="border rounded m-1 p-3 fs-5"
                role="button"
              >
                {question.option3}
              </li>
              <li
                ref={option4}
                onClick={(e) => {
                  checkAns(e, 4);
                }}
                className="border rounded m-1 p-3 fs-5"
                role="button"
              >
                {question.option4}
              </li>
            </ul>
            <div>
              <button className="btn btn-dark" onClick={next}>
                Next
              </button>
              <div className="index text-center fw-semibold">
                {index + 1} of {data.length} Questions
              </div>
            </div>
          </div>
        </>
      )}
      {result ? (
        <div className="m-4">
          <h2>
            Your Scored {score} out of {data.length}
          </h2>
          <button className="btn btn-dark m-2" onClick={reset}>Reset</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
