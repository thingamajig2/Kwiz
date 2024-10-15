import "./explanation.scss";
import React from "react";

const Explanation = ({ finalResult, type }) => {
  console.log(finalResult, "F");
  console.log(type, "t");
  return (
    <div className="explanation">
      {/* <div>You should try out a {finalResult} hobby</div> */}
      <div>You are an {finalResult}.<div className = "mbtiDetails">Introverts (I) direct their energy inwards, to ideas and thoughts. Extroverts (E) direct their energy outwards, towards people, things, and situations.Sensing people (S) prefer tangible facts. Intuitive people (N) prefer abstractions and theories.Feelers (F) look at situations through empathy for the people involved. Thinkers (T) look at situations from a more detached, logical viewpoint.Judging people (J) prefer a planned and structured approach to life. Perceiving people (P) prefer to be more spontaneous.</div></div>
      {/* <div>Your score: {finalResult}</div> */}
    </div>
  );
};


export default Explanation;
