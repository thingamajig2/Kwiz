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

  const filteredItems = subData.filter((item) => item.category === category);

  console.log(subData,'subData');

  return (
    <div className="subMap">
      {title ? (
        <QuizInside title={title} />
      ) : (
        filteredItems.map((item, index) => (
          <Box
            item={item || { title: "Untitled", backgroundImage: "", desc: "" }}
            key={`${item.title}-${index}`}
            handleClick={() => handleClick(item?.title || "")}
          />
        ))
      )}
    </div>
  );
};

export default SubMap;