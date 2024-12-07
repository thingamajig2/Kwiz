import Box from "../box/Box";
import "./home.scss";
import { useCallback, useState } from "react";
import { subData } from "../../subData";
import { infoData } from "../../items";
import SubMap from "../subMap/SubMap";

const Home = () => {
  const [subCat, setSubCat] = useState("");

  const dataForMap = subCat
    ? subData.filter((item) => item.category === subCat)
    : infoData;

  const handleClick = (category) => {
    setSubCat(category);
  };

  const back = useCallback(() => {
    setSubCat("");
  }, []);

  return (
    <div className="home">
      <div className="intro">
        <span>
          Welcome to Kwiz! To test your knowledge and your personality or get
          advice for your future, try out the many quizzes in the categories
          below!
        </span>
      </div>
      {subCat ? (
        <>
          <div className="backButton" onClick={back}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/9426/9426973.png"
              alt="back"
            />
            Back
          </div>
          <SubMap category={subCat} />
        </>
      ) : (
        <div className="categories">
          {dataForMap.map((item, index) => (
            <Box
              item={
                item || { title: "Untitled", backgroundImage: "", desc: "" }
              }
              key={`${item.title}-${index}`}
              handleClick={() => handleClick(item.title)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
