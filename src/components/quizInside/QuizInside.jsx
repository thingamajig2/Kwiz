import React, { useState } from "react";
import "../quizInside/quizInside.scss";
import { questions } from "../../questions";
import Explanation from "../explanation/Explanation";

const QuizInside = ({ title }) => {
  // State to track current question index and score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  // Access the list of questions for the given category
  const currentQuestions = questions[title];
  const currentQuestion = currentQuestions[currentQuestionIndex];
  const [mbtiResults, setMbtiResults] = useState({
    I: 0,
    E: 0,
    S: 0,
    N: 0,
    F: 0,
    T: 0,
    J: 0,
    P: 0,
  });
  const [hobbyResults, setHobbyResults] = useState({
    Creative: 0,
    Physical: 0,
    Intellectual: 0,
    Technical: 0,
    Interactive: 0,
  });

  const [finalHobbyRes, setFinalHobbyRes] = useState("");
  const [finalMbtiRes, setFinalMbtiRes] = useState("");

  const calculateHobby = (hobbyResults) => {
    let maxKey = Object.keys(hobbyResults).reduce((a, b) =>
      hobbyResults[a] > hobbyResults[b] ? a : b
    );
  
    return maxKey;
  };

  const calculateMBTI = (mbtiResults) => {
    let mbtiResult = "";

    // Compare I vs E, N vs S, F vs T, J vs P
    mbtiResult += mbtiResults.I > mbtiResults.E ? "I" : "E";
    mbtiResult += mbtiResults.N > mbtiResults.S ? "N" : "S";
    mbtiResult += mbtiResults.F > mbtiResults.T ? "F" : "T";
    mbtiResult += mbtiResults.J > mbtiResults.P ? "J" : "P";

    return mbtiResult;
  };
  const isMbtiTest = title === "Traits";

  const isHobbiesTest = title === "Hobbies and Interests";

  const handleAnswerClick = (answerIndex) => {
    let answer;
    if (isMbtiTest || isHobbiesTest) {
      answer = currentQuestion?.answers[`a${answerIndex}`];
    } else {
      answer = currentQuestion.correct;
    }

    if (isMbtiTest) {
      setMbtiResults((prevResults) => ({
        ...prevResults,
        [answer]: prevResults[answer] + 1,
      }));
    } else if (isHobbiesTest) {
      setHobbyResults((prevResults) => ({
        ...prevResults,
        [answer]: prevResults[answer] + 1,
      }));
    } else if (answerIndex === currentQuestion.correct) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (isMbtiTest) {
        setFinalMbtiRes(calculateMBTI(mbtiResults));
      } else if (isHobbiesTest) {
        setFinalHobbyRes(calculateHobby(hobbyResults));
      }
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="qA">
      {isQuizFinished ? (
        <Explanation
          finalResult={
            isMbtiTest ? finalMbtiRes : isHobbiesTest ? finalHobbyRes : score
          }
          type={
            isMbtiTest ? 'mbti' : isHobbiesTest ? 'hobby' : 'score'
          }
        />
      ) : (
        <>
          <h2>{currentQuestion.question}</h2>
          <li onClick={() => handleAnswerClick(1)}>{currentQuestion.a1}</li>
          <li onClick={() => handleAnswerClick(2)}>{currentQuestion.a2}</li>
          <li onClick={() => handleAnswerClick(3)}>{currentQuestion.a3}</li>
          <li onClick={() => handleAnswerClick(4)}>{currentQuestion.a4}</li>
          {!isMbtiTest && !isHobbiesTest && <div>Score: {score}</div>}
        </>
      )}
    </div>
  );
};

export default QuizInside;
