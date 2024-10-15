import Box from "../box/Box.jsx";
import { subData } from "../../subData.js";
import { useState } from "react";
import "./subMap.scss";
import QuizInside from "../quizInside/QuizInside.jsx";

const SubMap = ({ category }) => {
  const [title, setTitle] = useState("");

  const handleClick = (title) => {
    setTitle(title);
  };

  return (
    <div className="subMap">
      {title ? (
        <QuizInside title={title} />
      ) : (
        subData
          .filter((item) => item.category === category)
          .map((item, index) => (
            <Box
              title={item.title}
              image={item.image}
              backgroundImage={item.backgroundImage}
              key={Math.random() * index}
              handleClick={() => handleClick(item.title)}
            />
          ))
      )}
    </div>
  );
};

export default SubMap;
