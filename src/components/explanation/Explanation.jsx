import "./explanation.scss";
import React from "react";
import big from "../../images/bigbrain.jpg";
import small from "../../images/smallbrain.jpeg";
import medium from "../../images/mediumbrain.jpg";
import biggest from "../../images/biggestbrain.jpg";
import bigger from "../../images/bigger.jpg";

const ScoreView = ({score}) => {
  console.log(score, "s");
  console.log(ScoreView, "V");
  if(score < 3){
    return <img src = {small} alt = "small" />; 
  }
  if(score > 2 && score < 5){
    return <img src = {medium} alt = "medium" />; 
  }
  if(score > 4 && score < 7){
    return <img src = {big} alt = "big" />; 
  }
  if(score > 6 && score < 9){
    return <img src = {bigger} alt = "bigger" />; 
  }
  return <img src = {biggest} alt = "biggest" />;
}


const Explanation = ({ finalResult = "", type = "score" }) => {
  const mbtiTraits = [
    { title: "Introvert (I)", description: "Directs energy inward" },
    { title: "Extrovert (E)", description: "Directs energy outward" },
    { title: "Sensing (S)", description: "Prefers tangible facts" },
    { title: "Intuition (N)", description: "Prefers theories & abstractions" },
    { title: "Feeling (F)", description: "Considers empathy" },
    { title: "Thinking (T)", description: "Uses logic & detachment" },
    { title: "Judging (J)", description: "Likes planning & structure" },
    { title: "Perceiving (P)", description: "Prefers spontaneity" },
  ];
  const hobbyExamples = {
    Physical: [
      "Hiking and trail running",
      "Rock climbing",
      "Yoga and meditation",
      "Martial arts",
      "Swimming",
    ],
    Intellectual: [
      "Learning a new language",
      "Reading classic literature",
      "Solving puzzles like Sudoku or crosswords",
      "Studying astronomy",
      "Engaging in philosophy discussions",
    ],
    Creative: [
      "Painting with watercolors or oils",
      "Writing poetry or short stories",
      "Playing an instrument (e.g., guitar, piano)",
      "Creating digital art",
      "Photography and photo editing",
    ],
    Interactive: [
      "Joining a book club",
      "Hosting game nights with friends",
      "Volunteering for local events",
      "Taking part in improv or theater groups",
      "Dancing in group classes",
    ],
    Technical: [
      "Coding and app development",
      "Building DIY electronics",
      "Working on car or bike repairs",
      "Learning 3D printing and design",
      "Experimenting with robotics",
    ],
  };
  return (
    <div className="explanation">
      {type === "score" && (
        <div className="score">
          <span>Your score is {finalResult} out of 10</span>
          < ScoreView score = {finalResult}/>
        </div>
        
      )}

      {type === "hobby" && (
        <div className="hobby">
          <span>You should try out a/n {finalResult} hobby!</span>
          <span>Like..</span>
          {hobbyExamples[finalResult] && (
            <div className="hobbyExamples">
              {hobbyExamples[finalResult].map((example, index) => (
                <span key={index}>{example}</span>
              ))}
            </div>
          )}
        </div>
      )}

      {type === "mbti" && (
        <div className="mbti">
          <span>You are an {finalResult}.</span>
          <div className="mbtiGrid">
            {mbtiTraits.map(({ title, description }, index) => (
              <div className="traitPair" key={index}>
                <div className="trait">{title}</div>
                <div className="description">{description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Explanation;
